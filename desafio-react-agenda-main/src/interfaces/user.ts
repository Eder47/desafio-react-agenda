
export interface User {
  id: number;
  name: string;
  description: string;
  photo: string;
}

export interface CreateUserDTO {
  name: string;
  description: string;
  photo: string;
}


export interface PaginationParams {
  page: number;
  limit: number;
}


export interface SearchParams {
  query: string;
}
