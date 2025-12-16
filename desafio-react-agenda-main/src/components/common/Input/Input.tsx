import React from 'react';
import styles from './Input.module.css';
import { InputProps } from '../../../interfaces/common';


export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  label,
  error,
  required = false,
  icon,
}) => {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.inputContainer}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${styles.input} ${error ? styles.error : ''} ${icon ? styles.withIcon : ''}`}
          required={required}
        />
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
