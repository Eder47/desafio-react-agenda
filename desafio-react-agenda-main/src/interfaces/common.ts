import { User } from "./user";

export interface UserItemProps {
  user: User;
  onDelete: (id: number) => void;
}

export interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  rows?: number;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'url';
  label?: string;
  error?: string;
  required?: boolean;
  icon?: React.ReactNode;
}

export interface ErrorMessageProps {
  message: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}
