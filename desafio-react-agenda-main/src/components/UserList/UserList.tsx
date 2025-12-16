import React from 'react';
import { useDispatch} from 'react-redux';
import { UserItem } from '../common/UserItem/UserItem';
import { Pagination } from '../common/Pagination/Pagination';
import { Loading } from '../common/Loading/Loading';
import { ErrorMessage } from '../common/ErrorMessage/ErrorMessage';
import { deleteUser } from '../../store/actions/userActions';
import { useUsers } from '../../hooks/useUsers';
import styles from './UserList.module.css';


export const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { users, loading, error, currentPage, itemsPerPage, searchQuery, totalPages, handlePageChange } = useUsers();


  const handleDelete = (id: number) => {
    dispatch(deleteUser(id, currentPage, itemsPerPage, searchQuery) as any);
  };

  return (
    <div className={styles.userList}>
      <div className={styles.tableHeader}>
        <div className={styles.columnName}>Nombre</div>
        <div className={styles.columnDescription}>Descripción</div>
        <div className={styles.columnActions}>Acciones</div>
      </div>

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && users.length === 0 && (
        <div className={styles.emptyState}>
          <p>No se encontraron usuarios</p>
        </div>
      )}

      {!loading && !error && users.length > 0 && (
        <>
          <div className={styles.tableBody}>
            {users.map((user) => (
              <UserItem key={user.id} user={user} onDelete={handleDelete} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};
