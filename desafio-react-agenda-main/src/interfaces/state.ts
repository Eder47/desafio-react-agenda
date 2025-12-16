import { User } from './user';


export interface AppState {
  users: UserState;
  ui: UIState;
}

export interface UserState {
  items: User[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  searchQuery: string;
}

export interface UIState {
  isAddUserModalOpen: boolean;
}
