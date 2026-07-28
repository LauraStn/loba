export const LABEL_CLASS =
  "mb-1.5 block text-micro font-bold text-gray-600 dark:text-dark-ink-muted";

export const ERROR_CLASS = "mt-1.5 text-micro text-danger";

const FIELD_BASE =
  "w-full rounded-field border bg-gray-50 px-3.5 text-body text-navy transition-colors duration-[160ms] ease-out placeholder:text-gray-400 focus:border-accent focus:shadow-focus focus:outline-none dark:bg-dark-surface-alt dark:text-dark-ink dark:placeholder:text-dark-ink-faint";

type FieldStyleOptions = {
  hasError: boolean;
  className: string;
};

export const fieldStyles = ({ hasError, className }: FieldStyleOptions) =>
  [
    FIELD_BASE,
    hasError ? "border-danger" : "border-gray-200 dark:border-dark-border-strong",
    className,
  ].join(" ");
