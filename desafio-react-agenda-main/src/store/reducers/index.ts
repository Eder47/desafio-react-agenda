import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { uiReducer } from './uiReducer';
import { AppState } from '../../interfaces/state';


export const rootReducer = combineReducers<AppState>({
  users: userReducer,
  ui: uiReducer,
});
