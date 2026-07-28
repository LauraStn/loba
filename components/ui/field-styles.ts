export const LABEL_CLASS = "mb-1.5 block text-micro font-bold text-gray-600";

export const ERROR_CLASS = "mt-1.5 text-micro text-danger";

const FIELD_BASE =
  "w-full rounded-field border bg-gray-50 px-3.5 text-body text-navy transition-colors duration-[160ms] ease-out placeholder:text-gray-400 focus:border-accent focus:shadow-focus focus:outline-none";

type FieldStyleOptions = {
  hasError: boolean;
  className: string;
};

export const fieldStyles = ({ hasError, className }: FieldStyleOptions) =>
  [
    FIELD_BASE,
    hasError ? "border-danger" : "border-gray-200",
    className,
  ].join(" ");
