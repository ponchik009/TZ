import classNames from "classnames";
import React from "react";

import styles from "./Button.module.css";

type ButtonVariant = "filled";

interface IButtonProps {
  variant?: ButtonVariant;
  onClick?: () => void;
  title: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  variant = "filled",
  onClick = () => {},
  title,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(styles.button, styles[variant])}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
