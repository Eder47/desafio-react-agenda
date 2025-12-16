import React from 'react';
import { Trash2 } from 'lucide-react';
import styles from './UserItem.module.css';
import PersonIcon from '@mui/icons-material/Person';
import { UserItemProps } from '../../../interfaces/common';


export const UserItem: React.FC<UserItemProps> = ({ user, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`¿Está seguro de eliminar a ${user.name}?`)) {
      onDelete(user.id);
    }
  };

  return (
    <div className={styles.userItem}>
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <PersonIcon 
            style={{ width: 28, height: 28, color: "#61dafb" }} 
          />
        </div>

        <span className={styles.name}>{user.name}</span>
      </div>
      <div className={styles.description}>
        {user.description}
      </div>

      <div className={styles.actions}>
        <button
          onClick={handleDelete}
          className={styles.deleteButton}
          aria-label="Delete user"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};
