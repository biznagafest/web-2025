import type { APIRoute } from "astro";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN,
  MAIL_USERNAME,
} from "astro:env/server";
import {
  MailTransporterFactory,
  type Transporter,
} from "../../services/mail-transporter.factory";

export const POST: APIRoute<{
  name: string;
  email: string;
  message: string;
}> = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 },
    );
  }

  let transporter: Transporter | undefined;

  try {
    transporter = await MailTransporterFactory.create({
      type: "gmail",
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      refreshToken: GOOGLE_REFRESH_TOKEN,
      user: MAIL_USERNAME,
    });

    await transporter.sendMail({
      from: "biznagafest@gmail.com",
      to: "biznagafest@gmail.com",
      subject: `[SPONSOR CONTACT]: ${name} (${email})`,
      message: `<p>${message}</p>`,
    });

    transporter.close();
  } catch (error) {
    console.error("Error sending email:", error);
    transporter?.close();

    return new Response(
      JSON.stringify({
        message: "Failed to send email",
      }),
      { status: 500 },
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
