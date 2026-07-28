import type { ComponentPropsWithoutRef } from "react";

import { FieldLabel } from "./FieldLabel";
import { ERROR_CLASS, fieldStyles } from "./field-styles";

type TextAreaFieldProps = Omit<ComponentPropsWithoutRef<"textarea">, "id"> & {
  id: string;
  label: string;
  error?: string;
  optionalText?: string;
};

export const TextAreaField = ({
  id,
  label,
  error,
  required,
  optionalText,
  ...props
}: TextAreaFieldProps) => {
  const errorId = `${id}-error`;

  return (
    <div>
      <FieldLabel
        htmlFor={id}
        label={label}
        required={required}
        optionalText={optionalText}
      />
      <textarea
        id={id}
        required={required}
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
