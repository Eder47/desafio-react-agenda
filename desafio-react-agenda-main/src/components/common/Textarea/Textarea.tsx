import React from 'react';
import styles from './Textarea.module.css';
import { TextareaProps } from '../../../interfaces/common';


export const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder,
  label,
  error,
  required = false,
  rows = 4,
}) => {
  return (
    <div className={styles.textareaWrapper}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${styles.textarea} ${error ? styles.error : ''}`}
        required={required}
        rows={rows}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
