import type { APIRoute } from "astro";
import { Resend } from "resend";
import { RESEND_API_KEY } from "astro:env/server";

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
      JSON.stringify({ message: "Missing required fields" }),
      { status: 400 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "sponsors@biznagafest.com",
    to: "biznagafest@gmail.com",
    subject: `[SPONSOR CONTACT]: ${name} (${email})`,
    html: `<p>${message}</p>`,
  });

  if (error) {
    console.error({ error });
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }

  console.log({ event: "successfully sent mail", memailData: data });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
