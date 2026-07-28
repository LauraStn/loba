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

const EMPTY_VALUES: ContactValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

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
      <div className="grid content-center gap-2 rounded-surface border border-transparent bg-white p-7 shadow-panel dark:border-dark-border-strong dark:bg-dark-surface-alt">
        <p className="font-display text-card font-bold text-navy dark:text-dark-ink" role="status">
          {labels.success.title}
        </p>
        <p className="text-body text-gray-600 dark:text-dark-ink-muted">{labels.success.body}</p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={submitForm}
      className="grid gap-3.5 rounded-surface border border-transparent bg-white p-7 shadow-panel dark:border-dark-border-strong dark:bg-dark-surface-alt"
    >
      <p className="text-micro text-gray-500 dark:text-dark-ink-faint">
        <span aria-hidden="true" className="font-bold text-danger">
          *
        </span>{" "}
        {labels.requiredNote}
      </p>
      <div className="grid gap-3.5 md:grid-cols-2">
        <TextField
          id="contact-name"
          name="name"
          label={labels.name}
          required
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
          required
          autoComplete="email"
          value={values.email}
          error={errorFor("email")}
          onChange={(event) => updateValue("email", event.target.value)}
          onBlur={() => validateOnBlur("email")}
        />
        <TextField
          id="contact-company"
          name="company"
          label={labels.company}
          optionalText={labels.optional}
          autoComplete="organization"
          value={values.company}
          error={errorFor("company")}
          onChange={(event) => updateValue("company", event.target.value)}
          onBlur={() => validateOnBlur("company")}
        />
        <TextField
          id="contact-phone"
          name="phone"
          type="tel"
          label={labels.phone}
          optionalText={labels.optional}
          autoComplete="tel"
          value={values.phone}
          error={errorFor("phone")}
          onChange={(event) => updateValue("phone", event.target.value)}
          onBlur={() => validateOnBlur("phone")}
        />
      </div>
      <TextAreaField
        id="contact-message"
        name="message"
        label={labels.message}
        required
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
          className="rounded-field bg-danger/[0.07] px-3.5 py-3 text-micro text-gray-700 dark:bg-danger/[0.15] dark:text-dark-ink-muted"
        >
          {labels.networkError}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-bold text-accent underline dark:text-cyan"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      ) : null}

      <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
        {isSubmitting ? labels.submitting : labels.submit}
      </Button>
    </form>
  );
};
