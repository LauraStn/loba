import type { ComponentPropsWithoutRef } from "react";

import { ERROR_CLASS, LABEL_CLASS, fieldStyles } from "./field-styles";

type TextFieldProps = Omit<ComponentPropsWithoutRef<"input">, "id"> & {
  id: string;
  label: string;
  error?: string;
};

export const TextField = ({ id, label, error, ...props }: TextFieldProps) => {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <input
        id={id}
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
