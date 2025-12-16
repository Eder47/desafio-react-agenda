# Agenda Previred - Agenda de Contactos Laboral

Aplicación web desarrollada en React 17 para gestionar contactos laborales con funcionalidades completas de CRUD, búsqueda y paginación.

## Características

- **Gestión de Contactos**: Crear, visualizar y eliminar contactos
- **Búsqueda en Tiempo Real**: Búsqueda con debouncing para optimizar las llamadas a la API
- **Paginación**: Navegación entre páginas de contactos
- **Manejo de Errores**: Control de excepciones con mensajes descriptivos
- **Diseño Responsive**: Interfaz adaptable a diferentes dispositivos
- **Material Design**: Diseño similar a Material Design con componentes personalizados

## Tecnologías Utilizadas

- **React 17**: Framework principal
- **Redux + Redux Thunk**: Gestión del estado global
- **TypeScript**: Tipado estático
- **CSS Modules**: Estilos desacoplados y modulares
- **Vite**: Build tool y dev server
- **Lucide React**: Librería de iconos

## Arquitectura

La aplicación sigue una arquitectura modular con separación de responsabilidades:

```
src/
├── api/                    # Servicios de API
│   └── userApi.ts         # Cliente HTTP para usuarios
├── components/            # Componentes de la aplicación
│   ├── common/           # Componentes reutilizables
│   │   ├── Button/      # Componente de botón
│   │   ├── Input/       # Componente de input
│   │   ├── Textarea/    # Componente de textarea
│   │   ├── SearchBar/   # Barra de búsqueda
│   │   ├── Pagination/  # Controles de paginación
│   │   ├── Modal/       # Modal genérico
│   │   ├── Loading/     # Indicador de carga
│   │   ├── ErrorMessage/# Mensaje de error
│   │   └── UserItem/    # Item de usuario en la lista
│   ├── UserList/        # Lista completa de usuarios
│   └── AddUserModal/    # Modal para agregar usuarios
├── context/              # Contextos de React
│   └── ApiContext.tsx   # Proveedor de servicios API
├── hooks/                # Custom hooks
│   ├── useDebounce.ts   # Hook para debouncing
│   └── useUsers.ts      # Hook para gestión de usuarios
├── interfaces/           # Definiciones de tipos TypeScript
│   ├── user.ts          # Tipos de usuario
│   └── state.ts         # Tipos de estado
├── store/                # Redux store
│   ├── actions/         # Action creators
│   ├── reducers/        # Reducers
│   ├── actionTypes.ts   # Constantes de acciones
│   └── index.ts         # Configuración del store
├── App.tsx              # Componente principal
├── App.module.css       # Estilos del componente principal
├── main.tsx             # Punto de entrada
└── index.css            # Estilos globales
```

## Patrones y Buenas Prácticas Implementadas

### 1. Arquitectura por Capas
- **Capa de Presentación**: Componentes React
- **Capa de Lógica**: Redux + Custom Hooks
- **Capa de Datos**: API Services

### 2. Separación de Responsabilidades
- Componentes enfocados en una sola tarea
- CSS modular para evitar conflictos de estilos
- Custom hooks para lógica reutilizable

### 3. Gestión de Estado
- **Redux**: Estado global de la aplicación
- **useReducer**: Lógica compleja en componentes
- **Context API**: Proveedor de servicios

### 4. Manejo de Efectos Secundarios
- Redux Thunk para operaciones asíncronas
- Control de errores centralizado
- Loading states para mejor UX

### 5. Optimizaciones
- Debouncing en búsquedas
- Memorización de componentes cuando es necesario
- CSS modules para optimización de estilos

## Configuración

### Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_API_BASE_URL=http://localhost:3000
```

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## API Backend

La aplicación se conecta a un backend Node.js con los siguientes endpoints:

### GET /api/users
Devuelve la lista de todos los usuarios.

**Parámetros de Query:**
- `_page`: Número de página
- `_limit`: Cantidad de items por página
- `q`: Texto de búsqueda

**Ejemplo:**
```
GET /api/users?_page=1&_limit=10
GET /api/users?q=Francisco
```

### GET /api/users/:id
Devuelve un usuario específico.

**Ejemplo:**
```
GET /api/users/1
```

### POST /api/users
Crea un nuevo usuario.

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Algún nombre",
  "description": "Alguna descripción",
  "photo": "Alguna URL"
}
```

### DELETE /api/users/:id
Elimina un usuario.

**Ejemplo:**
```
DELETE /api/users/1
```

## Custom Hooks

### useUsers
Hook principal para gestión de usuarios que combina Redux y lógica de negocio.

```typescript
const {
  users,           // Lista de usuarios
  loading,         // Estado de carga
  error,           // Mensajes de error
  currentPage,     // Página actual
  searchQuery,     // Query de búsqueda
  handlePageChange,    // Cambiar página
  handleSearchChange   // Actualizar búsqueda
} = useUsers();
```

### useDebounce
Hook para optimizar búsquedas y evitar llamadas excesivas a la API.

```typescript
const debouncedValue = useDebounce(value, 500);
```

## Componentes Principales

### App
Componente raíz que orquesta toda la aplicación.

### UserList
Lista de usuarios con paginación y estados de carga/error.

### AddUserModal
Modal para crear nuevos contactos con validación de formulario.

### SearchBar
Barra de búsqueda con debouncing automático.

### UserItem
Representa un contacto individual con opción de eliminación.

## Control de Errores

La aplicación implementa manejo de errores en múltiples niveles:

1. **API Layer**: Clase `ApiError` personalizada con códigos de estado
2. **Redux Layer**: Actions para manejar estados de error
3. **Component Layer**: Componente `ErrorMessage` para mostrar errores
4. **Validación**: Validación de formularios con mensajes descriptivos

## Estilos

- **CSS Modules**: Cada componente tiene su propio archivo de estilos
- **Naming Convention**: BEM-like para clases CSS
- **Responsive Design**: Media queries para adaptabilidad
- **Color Palette**: Paleta de colores inspirada en Material Design

## Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Licencia

MIT
