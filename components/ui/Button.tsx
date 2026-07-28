import type { ComponentPropsWithoutRef } from "react";

import {
  buttonStyles,
  type ButtonSize,
  type ButtonVariant,
} from "./button-styles";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = ({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={buttonStyles({ variant, size, className })}
    {...props}
  />
);
