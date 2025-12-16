import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchUsers, setCurrentPage, setSearchQuery } from '../store/actions/userActions';
import { useDebounce } from './useDebounce';


export function useUsers() {
  const dispatch = useDispatch();

  const {
    items: users,
    loading,
    error,
    currentPage,
    itemsPerPage,
    searchQuery,
    totalPages
  } = useSelector((state: RootState) => state.users);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    dispatch(fetchUsers(currentPage, itemsPerPage, debouncedSearchQuery) as any);
  }, [dispatch, currentPage, itemsPerPage, debouncedSearchQuery]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleSearchChange = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  return {
    users,
    loading,
    error,
    currentPage,
    itemsPerPage,
    searchQuery,
    totalPages,
    handlePageChange,
    handleSearchChange,
  };
}
