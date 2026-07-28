import { z } from "zod";

export const NAME_MIN_LENGTH = 2;

export const MESSAGE_MIN_LENGTH = 20;

export const HONEYPOT_FIELD = "website";

export const contactSchema = z.object({
  name: z.string().trim().min(NAME_MIN_LENGTH),
  email: z.email().trim(),
  message: z.string().trim().min(MESSAGE_MIN_LENGTH),
});

export type ContactField = keyof z.infer<typeof contactSchema>;

export type ContactValues = Record<ContactField, string>;

export const CONTACT_FIELDS: ContactField[] = ["name", "email", "message"];

export const invalidContactFields = (values: ContactValues): ContactField[] => {
  const result = contactSchema.safeParse(values);

  if (result.success) return [];

  return [
    ...new Set(
      result.error.issues
        .map((issue) => issue.path[0])
        .filter((field): field is ContactField =>
          CONTACT_FIELDS.includes(field as ContactField),
        ),
    ),
  ];
};
