import React from 'react';
import { Search } from 'lucide-react';
import styles from './SearchBar.module.css';
import { SearchBarProps } from '../../../interfaces/common';

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Input search text',
}) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.iconWrapper}>
        <Search size={20} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};
