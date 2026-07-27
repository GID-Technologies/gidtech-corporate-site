import { Resend } from "resend";

export const runtime = "nodejs";

const serviceLabels: Record<string, string> = {
  consultation: "General business consultation",
  "visibility-system": "Business visibility review",
  "business-website": "Business website or digital showroom",
  "custom-platform": "Custom platform or business tool",
  automation: "Automation or intelligent workflow",
  "digital-care": "Ongoing digital care and maintenance",
  "build-with-gid": "Build With GID opportunity",
  partnership: "Partnership or strategic support",
  other: "Other enquiry",
};

const pathLabels: Record<string, string> = {
  builder: "Build products with GID",
  "business-partner": "Business or referral partner",
  "strategic-support": "Sponsorship or strategic support",
  "early-user": "Early user or pilot business",
};

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function removeLineBreaks(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return Response.json(
        { error: "Invalid form submission." },
        { status: 400 },
      );
    }

    const fullName = getString(body.fullName);
    const businessName = getString(body.businessName);
    const email = getString(body.email);
    const phone = getString(body.phone);
    const service = getString(body.service);
    const path = getString(body.path);
    const businessLink = getString(body.businessLink);
    const contactMethod = getString(body.contactMethod);
    const message = getString(body.message);
    const website = getString(body.website);
    const source = getString(body.source);

    // Bots commonly complete hidden fields. Return success without sending.
    if (website) {
      return Response.json({ success: true });
    }

    if (fullName.length < 2 || fullName.length > 100) {
      return Response.json(
        { error: "Please enter a valid full name." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email) || email.length > 160) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!serviceLabels[service]) {
      return Response.json(
        { error: "Please select a valid enquiry type." },
        { status: 400 },
      );
    }

    if (service === "build-with-gid" && !pathLabels[path]) {
      return Response.json(
        { error: "Please select a valid Build With GID path." },
        { status: 400 },
      );
    }

    if (message.length < 20 || message.length > 3000) {
      return Response.json(
        {
          error:
            "Please provide between 20 and 3,000 characters about the enquiry.",
        },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY.");

      return Response.json(
        {
          error:
            "The contact service has not been configured yet. Please email gidtech8@gmail.com.",
        },
        { status: 500 },
      );
    }

    const recipient = process.env.CONTACT_TO_EMAIL ?? "gidtech8@gmail.com";

    const sender =
      process.env.CONTACT_FROM_EMAIL ??
      "GID Technologies Website <onboarding@resend.dev>";

    const serviceLabel = serviceLabels[service];
    const pathLabel = pathLabels[path] ?? "Not applicable";

    const fields = [
      ["Full name", fullName],
      ["Business or organization", businessName || "Not provided"],
      ["Email", email],
      ["Phone or WhatsApp", phone || "Not provided"],
      ["Enquiry type", serviceLabel],
      ["Opportunity path", pathLabel],
      ["Preferred contact method", contactMethod || "Not provided"],
      ["Business or social link", businessLink || "Not provided"],
      ["Source page", source || "Not provided"],
    ];

    const rows = fields
      .map(
        ([label, value]) => `
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e5e5e5; font-weight: 700; vertical-align: top;">
              ${escapeHtml(label)}
            </td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e5e5e5; vertical-align: top;">
              ${escapeHtml(value)}
            </td>
          </tr>
        `,
      )
      .join("");

    const textBody = [
      "New GID Technologies website enquiry",
      "",
      ...fields.map(([label, value]) => `${label}: ${value}`),
      "",
      "Message:",
      message,
    ].join("\n");

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `[GIDTech Website] ${removeLineBreaks(
        serviceLabel,
      )} — ${removeLineBreaks(fullName)}`,
      text: textBody,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111111; max-width: 720px; margin: 0 auto;">
          <div style="background: #000000; color: #ffffff; padding: 24px; border-radius: 16px 16px 0 0;">
            <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #a3a3a3;">
              GID Technologies Website
            </p>

            <h1 style="margin: 0; font-size: 24px;">
              New enquiry received
            </h1>
          </div>

          <div style="border: 1px solid #e5e5e5; border-top: 0; padding: 24px; border-radius: 0 0 16px 16px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              ${rows}
            </table>

            <div style="margin-top: 24px;">
              <h2 style="font-size: 16px; margin-bottom: 10px;">
                Message
              </h2>

              <div style="white-space: pre-wrap; line-height: 1.7; background: #f5f5f5; padding: 16px; border-radius: 12px;">
                ${escapeHtml(message)}
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend contact error:", error);

      return Response.json(
        {
          error:
            "Your enquiry could not be delivered. Please try again or email gidtech8@gmail.com.",
        },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);

    return Response.json(
      {
        error:
          "Something went wrong while sending your enquiry. Please try again.",
      },
      { status: 500 },
    );
  }
}
