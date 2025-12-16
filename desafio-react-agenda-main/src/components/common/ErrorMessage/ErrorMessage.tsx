import React from 'react';
import { AlertCircle } from 'lucide-react';
import styles from './ErrorMessage.module.css';
import { ErrorMessageProps } from '../../../interfaces/common';


export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <AlertCircle size={24} className={styles.icon} />
      <p className={styles.message}>{message}</p>
    </div>
  );
};
