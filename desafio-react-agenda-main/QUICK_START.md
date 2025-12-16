# Guía de Inicio Rápido

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- Backend API corriendo en http://localhost:3000

## Instalación en 3 Pasos

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Variables de Entorno

El archivo `.env` ya está configurado con la URL del backend:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Si tu backend corre en otro puerto o URL, modifica esta variable.

### 3. Iniciar la Aplicación

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Verificación del Backend

Antes de usar la aplicación, asegúrate de que tu backend Node.js esté corriendo y responda a:

```bash
# Probar que el backend está funcionando
curl http://localhost:3000/api/users
```

Deberías recibir una respuesta JSON con la lista de usuarios.

## Estructura de Datos

El backend debe retornar usuarios en este formato:

```json
[
  {
    "id": 1,
    "name": "Francisco",
    "description": "Lorem ipsum dolor sit amet...",
    "photo": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
  }
]
```

## Funcionalidades Disponibles

### 1. Visualizar Contactos
- La página principal muestra todos los contactos
- Cada contacto muestra avatar, nombre y descripción

### 2. Buscar Contactos
- Usa la barra de búsqueda en la parte superior
- La búsqueda es automática con debouncing (espera 500ms después de escribir)

### 3. Agregar Contactos
- Haz clic en el botón "Agregar Contacto"
- Completa el formulario:
  - URL imagen de Perfil (opcional)
  - Nombre (requerido)
  - Descripción (requerido)
- Haz clic en "Guardar"

### 4. Eliminar Contactos
- Haz clic en el icono de papelera al lado de cada contacto
- Confirma la eliminación en el diálogo

### 5. Navegar entre Páginas
- Usa los botones de navegación en la parte inferior
- Muestra 10 contactos por página

## Comandos Disponibles

```bash
npm run dev

npm run build

npm run preview

npm run lint

npm run typecheck
```

## Solución de Problemas

### Error: Cannot connect to backend

**Solución:**
1. Verifica que el backend esté corriendo
2. Verifica la URL en `.env`
3. Revisa CORS en el backend

### Error: Module not found

**Solución:**
```bash
rm -rf node_modules
npm install
```

### Error: Port 5173 already in use

**Solución:**
```bash
kill -9 $(lsof -ti:5173)

npm run dev -- --port 3001
```

## Configuración del Backend

Tu backend Node.js debe implementar estos endpoints:

### GET /api/users
```javascript
app.get('/api/users', (req, res) => {
  const { _page, _limit, q } = req.query;
  res.json(users);
});
```

### GET /api/users/:id
```javascript
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  res.json(user);
});
```

### POST /api/users
```javascript
app.post('/api/users', (req, res) => {
  const newUser = {
    id: generateId(),
    ...req.body
  };
  users.push(newUser);
  res.json(newUser);
});
```

### DELETE /api/users/:id
```javascript
app.delete('/api/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});
```

### Importante: Configurar CORS

```javascript
const cors = require('cors');
app.use(cors());
```

## Próximos Pasos

1. Lee el `README.md` para más detalles
2. Revisa `ARCHITECTURE.md` para entender la arquitectura
3. Explora el código en `src/`
4. Personaliza los estilos en los archivos `.module.css`

## Soporte

Si encuentras problemas:
1. Verifica la consola del navegador (F12)
2. Verifica los logs del backend
3. Revisa las variables de entorno
4. Asegúrate de que el backend esté corriendo

## Demo Rápida

1. Abre `http://localhost:5173`
2. Verás la lista de contactos
3. Prueba la búsqueda escribiendo un nombre
4. Haz clic en "Agregar Contacto" para crear uno nuevo
5. Haz clic en el icono de papelera para eliminar un contacto

¡Listo! Tu aplicación de agenda de contactos está funcionando.
