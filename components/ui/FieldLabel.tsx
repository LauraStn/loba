import { LABEL_CLASS } from "./field-styles";

type FieldLabelProps = {
  htmlFor: string;
  label: string;
  required?: boolean;
  optionalText?: string;
};

export const FieldLabel = ({
  htmlFor,
  label,
  required,
  optionalText,
}: FieldLabelProps) => (
  <label htmlFor={htmlFor} className={LABEL_CLASS}>
    {label}
    {required ? (
      <span aria-hidden="true" className="text-danger">
        {" *"}
      </span>
    ) : null}
    {!required && optionalText ? (
      <span className="font-normal text-gray-500">{` (${optionalText})`}</span>
    ) : null}
  </label>
);
