import React from "react";

import styles from "./Input.module.css";

interface IInputProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  label = "",
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
