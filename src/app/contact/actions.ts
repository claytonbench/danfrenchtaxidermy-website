"use server";

import { headers } from "next/headers";

export type ContactResult =
  | { ok: true; message: string }
  | { ok: false; message: string; errors?: Record<string, string> };

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  species: string;
  mountType: string;
  message: string;
  // honeypot
  website?: string;
};

function validate(p: ContactPayload) {
  const errors: Record<string, string> = {};
  if (!p.name || p.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(p.email)) errors.email = "Please enter a valid email.";
  if (!p.phone || p.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone.";
  if (!p.message || p.message.trim().length < 10) errors.message = "Please add a short message (10+ characters).";
  return errors;
}

export async function submitContact(_prev: ContactResult | null, formData: FormData): Promise<ContactResult> {
  const payload: ContactPayload = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    species: String(formData.get("species") ?? "").trim(),
    mountType: String(formData.get("mountType") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    website: String(formData.get("website") ?? "").trim(),
  };

  // Honeypot: silently succeed
  if (payload.website) {
    return { ok: true, message: "Thanks — we’ll be in touch shortly." };
  }

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Please correct the highlighted fields.", errors };
  }

  // Lightweight audit log on the server
  try {
    const h = await headers();
    const ua = h.get("user-agent") ?? "";
    console.log(
      `[contact] from=${payload.email} name=${payload.name} phone=${payload.phone} ua=${ua.slice(0, 80)}`,
    );
  } catch {
    // ignore
  }

  // Deliver via webhook if configured; otherwise just log.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: process.env.CONTACT_TO_EMAIL ?? "dan@danfrenchtaxidermy.com",
          subject: `Website inquiry — ${payload.name}`,
          form: payload,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (e) {
      // We've still logged; surface a friendly message.
      return {
        ok: false,
        message:
          "We couldn’t submit your message right now. Please call (970) 218-6281 or email dan@danfrenchtaxidermy.com.",
      };
    }
  }

  return {
    ok: true,
    message:
      "Thanks — your message has been received. Dan or someone from the shop will be in touch within a couple of business days.",
  };
}
