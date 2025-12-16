import { UserState } from '../../interfaces/state';
import * as types from '../actionTypes';

const initialState: UserState = {
  items: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: 3,
  searchQuery: '',
};


export const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
    case types.CREATE_USER_REQUEST:
    case types.DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        error: null,
      };

    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.filter(user => user.id !== action.payload),
        error: null,
      };

    case types.FETCH_USERS_FAILURE:
    case types.CREATE_USER_FAILURE:
    case types.DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case types.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
        currentPage: 1,
      };

    default:
      return state;
  }
};
