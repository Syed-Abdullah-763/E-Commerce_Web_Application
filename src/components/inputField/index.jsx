import React from "react";
import styles from "./inputField.module.css";

const InputField = ({ type, placeholder, value, onChange, error }) => {
  const inputId = React.useId();

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.inputWrap}`}>
        <input
          id={inputId}
          type={type}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>

      {error && (
        <p id={`${inputId}-error`} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
