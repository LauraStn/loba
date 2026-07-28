import type { ComponentPropsWithoutRef } from "react";

import { ERROR_CLASS, LABEL_CLASS, fieldStyles } from "./field-styles";

type TextAreaFieldProps = Omit<
  ComponentPropsWithoutRef<"textarea">,
  "id"
> & {
  id: string;
  label: string;
  error?: string;
};

export const TextAreaField = ({
  id,
  label,
  error,
  ...props
}: TextAreaFieldProps) => {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldStyles({
          hasError: Boolean(error),
          className: "h-[120px] resize-y py-2.5",
        })}
        {...props}
      />
      <p id={errorId} aria-live="polite" className={error ? ERROR_CLASS : ""}>
        {error}
      </p>
    </div>
  );
};
