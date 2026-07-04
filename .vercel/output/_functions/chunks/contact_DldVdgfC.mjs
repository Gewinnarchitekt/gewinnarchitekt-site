import { Resend } from 'resend';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, name, firmenname, nachricht, company_website } = body;
    if (company_website) {
      console.warn("Honeypot field filled. Silently dropping submission.");
      return new Response(
        JSON.stringify({ success: true, message: "Submission silently dropped." }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!email || !name || !nachricht) {
      return new Response(
        JSON.stringify({ error: "Bitte füllen Sie alle erforderlichen Felder aus." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const resendApiKey = process.env.RESEND_API_KEY || "re_hzf8G9J6_Gvb8SKWNWzstq5X1QZK2wm3j";
    if (!resendApiKey) ;
    const resend = new Resend(resendApiKey);
    const { data, error } = await resend.emails.send({
      from: "info@gewinnarchitekt.ch",
      to: "karl@gewinnarchitekt.ch",
      subject: `Kontaktanfrage von ${name}`,
      text: `
Neue Kontaktanfrage über gewinnarchitekt.ch:

E-Mail: ${email}
Name: ${name}
Firmenname: ${firmenname || "Nicht angegeben"}

Nachricht:
${nachricht}
`,
      html: `
<h3>Neue Kontaktanfrage über gewinnarchitekt.ch</h3>
<table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif;">
  <tr>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">Name:</td>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
  </tr>
  <tr>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">E-Mail:</td>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
  </tr>
  <tr>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Firmenname:</td>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${firmenname || "Nicht angegeben"}</td>
  </tr>
</table>
<br/>
<h4 style="font-family: sans-serif; margin-bottom: 8px;">Nachricht:</h4>
<div style="font-family: sans-serif; white-space: pre-wrap; background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; max-width: 600px; color: #1f2937;">${nachricht}</div>
`
    });
    if (error) {
      console.error("Error sending email through Resend:", error);
      return new Response(
        JSON.stringify({ error: `E-Mail-Versand fehlgeschlagen: ${error.message}` }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    try {
      const confirmRes = await resend.emails.send({
        from: "info@gewinnarchitekt.ch",
        to: email,
        replyTo: "info@gewinnarchitekt.ch",
        subject: "Ihre Nachricht an gewinnarchitekt.ch",
        text: `
Danke für Ihre Nachricht, ich melde mich zeitnah bei Ihnen.

Zusammenfassung Ihrer Angaben:
Name: ${name}
E-Mail: ${email}
Firmenname: ${firmenname || "Nicht angegeben"}

Nachricht:
${nachricht}
`,
        html: `
<p style="font-family: sans-serif; font-size: 16px; color: #1f2937;">Danke für Ihre Nachricht, ich melde mich zeitnah bei Ihnen.</p>
<br/>
<h4 style="font-family: sans-serif; margin-bottom: 8px;">Zusammenfassung Ihrer Angaben:</h4>
<table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif;">
  <tr>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">Name:</td>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
  </tr>
  <tr>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">E-Mail:</td>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
  </tr>
  <tr>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Firmenname:</td>
    <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${firmenname || "Nicht angegeben"}</td>
  </tr>
</table>
<br/>
<h4 style="font-family: sans-serif; margin-bottom: 8px;">Nachricht:</h4>
<div style="font-family: sans-serif; white-space: pre-wrap; background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; max-width: 600px; color: #1f2937;">${nachricht}</div>
`
      });
      if (confirmRes.error) {
        console.error("Error sending confirmation email through Resend:", confirmRes.error);
      }
    } catch (confirmErr) {
      console.error("Exception occurred while sending confirmation email:", confirmErr);
    }
    return new Response(
      JSON.stringify({ success: true, id: data?.id }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (err) {
    console.error("Exception occurred in contact endpoint:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Ein interner Serverfehler ist aufgetreten." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
