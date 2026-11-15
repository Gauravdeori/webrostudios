import { site } from "@/data/content";

export type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;
export function validateContact(d: {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}): Errors {
  const e: Errors = {};
  if (!d.name || d.name.trim().length < 2) e.name = "Please enter your name.";
  if (!d.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim()))
    e.email = "Please enter a valid email.";
  if (d.phone && d.phone.trim() && !/^[+\d\s-]{7,15}$/.test(d.phone.trim()))
    e.phone = "Please enter a valid phone number.";
  if (!d.message || d.message.trim().length < 10)
    e.message = "Tell us a little more (10+ characters).";
  return e;
}

/** Sends form data to the inbox configured in `site.formEndpoint`. Resolves true on success. */
export async function submitForm(
  data: Record<string, string>,
  endpoint = site.formEndpoint,
): Promise<boolean> {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _template: "table", _captcha: "false", ...data }),
    });
    if (!res.ok) return false;
    const json = (await res.json().catch(() => ({}))) as { success?: string | boolean };
    return json.success === true || json.success === "true";
  } catch {
    return false;
  }
}

export type ContactData = Partial<
  Record<"name" | "email" | "phone" | "type" | "budget" | "timeline" | "message" | "_honey", string>
>;

/** Pre-filled WhatsApp link — used as a fallback if the form service is unreachable. */
export function whatsappLink(d: ContactData) {
  const lines = [
    `Hi Webro Studios! I'm ${d.name ?? ""}.`,
    d.type && `Project: ${d.type}`,
    d.budget && `Budget: ${d.budget}`,
    d.timeline && `Timeline: ${d.timeline}`,
    d.message && `\n${d.message}`,
  ].filter(Boolean);
  return `${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
