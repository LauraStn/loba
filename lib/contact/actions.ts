"use server";

import { HONEYPOT_FIELD, contactSchema } from "./schema";

export type ContactResult = { ok: boolean };

const readField = (formData: FormData, field: string) => {
  const value = formData.get(field);

  return typeof value === "string" ? value : "";
};

export const sendContactMessage = async (
  formData: FormData,
): Promise<ContactResult> => {
  if (readField(formData, HONEYPOT_FIELD) !== "") {
    return { ok: true };
  }

  const parsed = contactSchema.safeParse({
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    message: readField(formData, "message"),
  });

  if (!parsed.success) {
    return { ok: false };
  }

  const endpoint = process.env.CONTACT_ENDPOINT_URL;

  if (!endpoint) {
    console.warn(
      "CONTACT_ENDPOINT_URL is not set: the contact message was not delivered.",
    );

    return { ok: false };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(parsed.data),
  });

  return { ok: response.ok };
};
