import { useDispatch } from 'react-redux';
import { Plus } from 'lucide-react';
import { SearchBar } from './components/common/SearchBar/SearchBar';
import { Button } from './components/common/Button/Button';
import { UserList } from './components/UserList/UserList';
import { AddUserModal } from './components/AddUserModal/AddUserModal';
import { openAddUserModal } from './store/actions/uiActions';
import { useUsers } from './hooks/useUsers';
import styles from './App.module.css';


function App() {
  const dispatch = useDispatch();
  const { searchQuery, handleSearchChange } = useUsers();

  const handleAddUserClick = () => {
    dispatch(openAddUserModal());
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Agenda Previred - Mi agenda de contactos laboral</h1>
            <p className={styles.subtitle}>
              Aquí podrá encontrar o buscar a todos sus contactos agregados, agregar nuevos
              contactos y eliminar contactos no deseados.
            </p>
          </div>

          <div className={styles.headerActions}>
            <Button
              variant="primary"
              onClick={handleAddUserClick}
              icon={<Plus size={20} />}
            >
              Agregar Contacto
            </Button>
          </div>

          <div className={styles.searchSection}>
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Input search text"
            />
          </div>
        </header>

        <main className={styles.main}>
          <UserList />
        </main>
      </div>

      <AddUserModal />
    </div>
  );
}

export default App;
