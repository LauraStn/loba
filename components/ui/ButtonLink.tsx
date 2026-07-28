import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import {
  buttonStyles,
  type ButtonSize,
  type ButtonVariant,
} from "./button-styles";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const ButtonLink = ({
  variant,
  size,
  className,
  ...props
}: ButtonLinkProps) => (
  <Link className={buttonStyles({ variant, size, className })} {...props} />
);
