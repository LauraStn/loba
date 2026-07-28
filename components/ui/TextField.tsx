import type { ComponentPropsWithoutRef } from "react";

import { FieldLabel } from "./FieldLabel";
import { ERROR_CLASS, fieldStyles } from "./field-styles";

type TextFieldProps = Omit<ComponentPropsWithoutRef<"input">, "id"> & {
  id: string;
  label: string;
  error?: string;
  optionalText?: string;
};

export const TextField = ({
  id,
  label,
  error,
  required,
  optionalText,
  ...props
}: TextFieldProps) => {
  const errorId = `${id}-error`;

  return (
    <div>
      <FieldLabel
        htmlFor={id}
        label={label}
        required={required}
        optionalText={optionalText}
      />
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldStyles({
          hasError: Boolean(error),
          className: "h-[42px] max-md:h-11",
        })}
        {...props}
      />
      <p id={errorId} aria-live="polite" className={error ? ERROR_CLASS : ""}>
        {error}
      </p>
    </div>
  );
};
