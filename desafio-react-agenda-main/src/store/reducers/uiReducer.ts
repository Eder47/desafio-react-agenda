import { UIState } from '../../interfaces/state';
import * as types from '../actionTypes';


const initialState: UIState = {
  isAddUserModalOpen: false,
};


export const uiReducer = (state = initialState, action: any): UIState => {
  switch (action.type) {
    case types.OPEN_ADD_USER_MODAL:
      return {
        ...state,
        isAddUserModalOpen: true,
      };

    case types.CLOSE_ADD_USER_MODAL:
      return {
        ...state,
        isAddUserModalOpen: false,
      };

    default:
      return state;
  }
};
