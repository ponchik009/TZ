import React from "react";
import {
  Control,
  Controller,
  FieldErrorsImpl,
  RegisterOptions,
} from "react-hook-form";
import { IFormData } from "../../pages/SearchPage/SearchPage";
import Input from "../Input/Input";

import styles from "./FormInput.module.css";

interface IFormInput {
  control: Control<IFormData>;
  name: keyof IFormData;
  errors: FieldErrorsImpl;
  // https://react-hook-form.com/ts#UseControllerPropsRef
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  placeholder?: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
}

const FormInput: React.FC<IFormInput> = ({
  control,
  errors,
  name,
  rules = {},
  label = "",
  placeholder = "",
  type = "text",
}) => {
  return (
    <div className={styles.inputBlock}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Input
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            type={type}
            label={label}
          />
        )}
      />
      {errors[name] && (
        <div className={styles.error}>{errors[name]?.message as string}</div>
      )}
    </div>
  );
};

export default FormInput;
