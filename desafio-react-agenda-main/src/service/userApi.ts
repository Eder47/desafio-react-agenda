import { User, CreateUserDTO, PaginationParams, SearchParams } from '../interfaces/user';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:9000';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}


async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorMessage = `Error ${response.status}: ${response.statusText}`;
    throw new ApiError(response.status, errorMessage);
  }

  const data = await response.json();
  return data;
}


export async function getUsers(
  params?: Partial<PaginationParams & SearchParams>
): Promise<{
  items: User[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}> {
  try {
    const queryParams = new URLSearchParams();

    const page = params?.page || 1;
    const limit = params?.limit || 3;

    queryParams.append("_page", String(page));
    queryParams.append("_limit", String(limit));

    if (params?.query) {
      queryParams.append("q", params.query);
    }

    const url = `${API_BASE_URL}/api/users?${queryParams.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new ApiError(response.status, "Error al cargar usuarios");
    }

    const totalItems = Number(response.headers.get("X-Total-Count")) || 0;
    const items = await response.json();
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));

    return {
      items,
      totalItems,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(500, "Error de red");
  }
}


export async function getUserById(id: number): Promise<User> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/${id}`);
    return handleResponse<User>(response);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, 'Error al obtener el usuario.');
  }
}

export async function createUser(user: CreateUserDTO): Promise<User> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    return handleResponse<User>(response);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, 'Error al crear el usuario.');
  }
}

export async function deleteUser(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new ApiError(response.status, `Error al eliminar el usuario: ${response.statusText}`);
    }
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, 'Error al eliminar el usuario.');
  }
}
