import { Resend } from 'resend';

export const dynamic = 'force-dynamic';
export async function POST(req: Request) {
  try {
    const reqData = await req.json();
    const { token, name, email, message } = reqData;

    const resendApiKey = process.env.RESEND_API_KEY;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL || 'akash.patilx7@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    // If API keys are not configured, return clear message so client uses mailto fallback
    if (!resendApiKey || !fromEmail) {
      return new Response(
        JSON.stringify({ message: 'Email service unconfigured', success: false }),
        { status: 200 }
      );
    }

    if (secretKey && token) {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
        { method: 'POST' }
      );
      const captchaResponse = await response.json();
      if (!captchaResponse.success) {
        return new Response(
          JSON.stringify({ message: 'Failed to verify captcha', success: false }),
          { status: 200 }
        );
      }
    }

    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: [toEmail],
      subject: `Portfolio Contact: [${name}]`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    if (error) {
      return new Response(
        JSON.stringify({ message: 'Failed to send email', success: false }),
        { status: 200 }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Message sent successfully', success: true }),
      { status: 200 }
    );
  } catch {
    return new Response(
      JSON.stringify({ message: 'Server fallback triggered', success: false }),
      { status: 200 }
    );
  }
}
