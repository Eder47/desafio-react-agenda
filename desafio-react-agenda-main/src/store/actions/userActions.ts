import { Dispatch } from 'redux';
import * as api from '../../service/userApi';
import { CreateUserDTO } from '../../interfaces/user';
import * as types from '../actionTypes';


export const fetchUsers = (page: number, limit: number, searchQuery: string = '') => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: types.FETCH_USERS_REQUEST });

    try {
      const params = {
        page,
        limit,
        ...(searchQuery && { query: searchQuery }),
      };

      const users = await api.getUsers(params);

      dispatch({
        type: types.FETCH_USERS_SUCCESS,
        payload: users,
      });
    } catch (error) {
      const errorMessage = error instanceof api.ApiError
        ? error.message
        : 'Error desconocido al cargar usuarios';

      dispatch({
        type: types.FETCH_USERS_FAILURE,
        payload: errorMessage,
      });
    }
  };
};


export const createUser = (user: CreateUserDTO, currentPage: number, limit: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: types.CREATE_USER_REQUEST });

    try {
      const newUser = await api.createUser(user);

      dispatch({
        type: types.CREATE_USER_SUCCESS,
        payload: newUser,
      });

      dispatch(fetchUsers(currentPage, limit) as any);
    } catch (error) {
      const errorMessage = error instanceof api.ApiError
        ? error.message
        : 'Error al crear el usuario';

      dispatch({
        type: types.CREATE_USER_FAILURE,
        payload: errorMessage,
      });
    }
  };
};


export const deleteUser = (id: number, currentPage: number, limit: number, searchQuery: string = '') => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: types.DELETE_USER_REQUEST });

    try {
      await api.deleteUser(id);

      dispatch({
        type: types.DELETE_USER_SUCCESS,
        payload: id,
      });

      dispatch(fetchUsers(currentPage, limit, searchQuery) as any);
    } catch (error) {
      const errorMessage = error instanceof api.ApiError
        ? error.message
        : 'Error al eliminar el usuario';

      dispatch({
        type: types.DELETE_USER_FAILURE,
        payload: errorMessage,
      });
    }
  };
};

export const setCurrentPage = (page: number) => ({
  type: types.SET_CURRENT_PAGE,
  payload: page,
});


export const setSearchQuery = (query: string) => ({
  type: types.SET_SEARCH_QUERY,
  payload: query,
});
