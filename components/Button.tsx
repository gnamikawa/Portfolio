import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, variant)}
      {...props}
    >
      {label}
    </button>
  );
};
