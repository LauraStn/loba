"use client";

import { useState, useTransition, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { CONTACT_EMAIL } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { sendContactMessage } from "@/lib/contact/actions";
import {
  HONEYPOT_FIELD,
  invalidContactFields,
  type ContactField,
  type ContactValues,
} from "@/lib/contact/schema";

const EMPTY_VALUES: ContactValues = { name: "", email: "", message: "" };

type FormStatus = "idle" | "success" | "error";

type ContactFormProps = {
  labels: Dictionary["contact"]["form"];
};

export const ContactForm = ({ labels }: ContactFormProps) => {
  const [values, setValues] = useState<ContactValues>(EMPTY_VALUES);
  const [invalidFields, setInvalidFields] = useState<ContactField[]>([]);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [isSubmitting, startSubmitting] = useTransition();

  const errorFor = (field: ContactField) =>
    invalidFields.includes(field) ? labels.errors[field] : undefined;

  const updateValue = (field: ContactField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setInvalidFields((current) => current.filter((invalid) => invalid !== field));
  };

  const validateOnBlur = (field: ContactField) => {
    const stillInvalid = invalidContactFields(values).includes(field);

    setInvalidFields((current) =>
      stillInvalid
        ? [...new Set([...current, field])]
        : current.filter((invalid) => invalid !== field),
    );
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const invalid = invalidContactFields(values);

    if (invalid.length > 0) {
      setInvalidFields(invalid);
      setStatus("idle");

      return;
    }

    const formData = new FormData(event.currentTarget);

    startSubmitting(async () => {
      try {
        const result = await sendContactMessage(formData);

        setStatus(result.ok ? "success" : "error");

        if (result.ok) setValues(EMPTY_VALUES);
      } catch {
        setStatus("error");
      }
    });
  };

  if (status === "success") {
    return (
      <div className="grid content-center gap-2 rounded-surface bg-white p-7 shadow-panel">
        <p className="font-display text-card font-bold text-navy" role="status">
          {labels.success.title}
        </p>
        <p className="text-body text-gray-600">{labels.success.body}</p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={submitForm}
      className="grid gap-3.5 rounded-surface bg-white p-7 shadow-panel"
    >
      <div className="grid gap-3.5 md:grid-cols-2">
        <TextField
          id="contact-name"
          name="name"
          label={labels.name}
          autoComplete="name"
          value={values.name}
          error={errorFor("name")}
          onChange={(event) => updateValue("name", event.target.value)}
          onBlur={() => validateOnBlur("name")}
        />
        <TextField
          id="contact-email"
          name="email"
          type="email"
          label={labels.email}
          autoComplete="email"
          value={values.email}
          error={errorFor("email")}
          onChange={(event) => updateValue("email", event.target.value)}
          onBlur={() => validateOnBlur("email")}
        />
      </div>
      <TextAreaField
        id="contact-message"
        name="message"
        label={labels.message}
        value={values.message}
        error={errorFor("message")}
        onChange={(event) => updateValue("message", event.target.value)}
        onBlur={() => validateOnBlur("message")}
      />

      <div aria-hidden="true" className="sr-only">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-field bg-danger/[0.07] px-3.5 py-3 text-micro text-gray-700"
        >
          {labels.networkError}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-bold text-accent underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? labels.submitting : labels.submit}
      </Button>
    </form>
  );
};
