import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from '../../../interfaces/common';


export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon,
}) => {
  const className = `${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};
