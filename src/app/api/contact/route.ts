import { Resend } from "resend";
import { siteContent } from "@content/site-content";

const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL ?? siteContent.contact.blocks[0].email;
const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL ??
  "The Story of ShipRocked <onboarding@resend.dev>";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function readField(body: unknown, key: string) {
  if (!body || typeof body !== "object" || !(key in body)) return "";
  const value = (body as Record<string, unknown>)[key];
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill this; humans never see it.
  if (readField(body, "website")) {
    return Response.json({ ok: true });
  }

  const name = readField(body, "name");
  const email = readField(body, "email");
  const message = readField(body, "message");

  if (name.length < 1 || name.length > 120) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (message.length < 1 || message.length > 5000) {
    return Response.json({ error: "Please enter a message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json(
      { error: "Messaging is not configured yet." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  let data;
  let error;

  try {
    ({ data, error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `ShipRocked contact form - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${safeName}</p>
<p><strong>Email:</strong> ${safeEmail}</p>
<p>${safeMessage}</p>`,
    }));
  } catch (networkError) {
    console.error("Resend network error:", networkError);
    return Response.json(
      { error: "Couldn't send that message. Please try again." },
      { status: 502 },
    );
  }

  if (error) {
    console.error("Resend contact error:", error);
    return Response.json(
      { error: "Couldn't send that message. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true, id: data?.id });
}
