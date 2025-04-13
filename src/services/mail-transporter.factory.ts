import { google } from "googleapis";
import nodemailer from "nodemailer";
import { assertUnreachable } from "../utils/assert-unreachable";

export interface Transporter {
  sendMail: (options: {
    from: string;
    to: string;
    subject: string;
    message: string;
  }) => Promise<void>;
  close: () => void;
}

export class MailTransporterFactory {
  static async create(config: {
    type: "gmail";
    clientId: string;
    clientSecret: string;
    refreshToken: string;
    user: string;
  }): Promise<Transporter> {
    const { type } = config;

    if (type === "gmail") {
      const OAuth2 = google.auth.OAuth2;

      const oauth2Client = new OAuth2(
        config.clientId,
        config.clientSecret,
        "https://developers.google.com/oauthplayground",
      );

      oauth2Client.setCredentials({
        refresh_token: config.refreshToken,
      });

      const { token } = await oauth2Client.getAccessToken();

      if (!token) {
        throw new Error("Failed to get access token");
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: config.user,
          clientId: config.clientId,
          clientSecret: config.clientSecret,
          refreshToken: config.refreshToken,
          accessToken: token,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      return {
        close: () => {
          transporter.close();
        },
        sendMail: async (options) => {
          return new Promise((resolve, reject) => {
            transporter.sendMail(
              {
                from: options.from,
                to: options.to,
                subject: options.subject,
                html: options.message,
              },
              (err) => {
                if (err) {
                  console.error("Error sending email:", err);
                  reject(err);
                } else {
                  console.log("Email sent successfully");
                  resolve();
                }
              },
            );
          });
        },
      };
    } else {
      assertUnreachable(type);
    }
  }
}
