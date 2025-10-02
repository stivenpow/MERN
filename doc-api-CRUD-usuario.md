# 📂 Documentación del API RESTful: CRUD de Usuarios (MERN)

Esta documentación describe los _endpoints_ del API RESTful para la gestión completa de usuarios, implementados en Node.js, Express y Mongoose.

## 🔗 URL Base del Servidor

Todas las peticiones deben dirigirse al siguiente _host_:

`http://localhost:5000/api/usuario`

---

## 1. Crear Nuevo Usuario (Create)

Registra un nuevo usuario en la base de datos.

### ➡️ Endpoint

| Método     | Ruta                          |
| :--------- | :---------------------------- |
| **`POST`** | `/api/usuario/agregarusuario` |

### 📤 Cuerpo de la Petición (`req.body`)

Debe ser un objeto JSON.

| Campo       | Tipo     | Requerido | Descripción                                       |
| :---------- | :------- | :-------- | :------------------------------------------------ |
| `nombre`    | `string` | Sí        | Nombre completo del usuario.                      |
| `email`     | `string` | Sí        | Dirección de correo electrónico.                  |
| `telefono`  | `string` | Sí        | Número de teléfono.                               |
| `idusuario` | `string` | Sí        | ID único generado (usado como clave de búsqueda). |

### ✅ Respuesta Exitosa (`200 OK`)

```json
{
  "mensaje": "Usuario agregado correctamente"
}
```

# ❌ Respuesta de Error (400 Bad Request / 500 Internal Server Error)

```json
{
  "mensaje": "Fallo al guardar el usuario",
  "errorDetalle": "Mongoose: Path `email` es requerido."
}
```

# 2. Obtener Todos los Usuarios (Read All)

Recupera la lista completa de todos los usuarios.

## ➡️ Endpoint

| Método | Ruta                         |
| ------ | ---------------------------- |
| GET    | /api/usuario/obtenerusuarios |

## 📤 Parámetros

No requiere cuerpo ni parámetros de URL.

## ✅ Respuesta Exitosa (200 OK)

Devuelve un array de objetos de usuario.

```json
[
  {
    "nombre": "Stiven Torres",
    "email": "stiven@mail.com",
    "idusuario": "mg782fft",
    "telefono": "3001234567"
  }
  // ... más usuarios
]
```

# 3. Obtener Usuario Individual(Read One)

Recupera la infomacion de un usuario segun su `idusuario`.

## ➡️ Endpoint

| Método | Ruta                            |
| ------ | ------------------------------- |
| GET    | /api/usuario/obtenerdatausuario |

## 📤 Cuerpo de la Petición (idusuario: req.body.idusuario)

Debe incluir el ID.

| Campo     | Tipo   | Requerido | Descripción                            |
| --------- | ------ | --------- | -------------------------------------- |
| idusuario | string | Sí        | ID del usuario (criterio de búsqueda). |
| nombre    | string | No        | Nuevo nombre.                          |
| email     | string | No        | Nuevo email.                           |
| telefono  | string | No        | Nuevo teléfono.                        |

## ✅ Respuesta Exitosa (200 OK)

Devuelve un array de objetos de usuario.

```json
[
  {
    "nombre": "Stiven Torres",
    "email": "stiven@mail.com",
    "idusuario": "mg782fft",
    "telefono": "3001234567"
  }
  // ... más usuarios
]
```

# 4. Actualizar Usuario (Update)

Modifica los datos de un usuario existente, identificado por su `idusuario`.

## ➡️ Endpoint

| Método | Ruta                          |
| ------ | ----------------------------- |
| PUT    | /api/usuario/actualizausuario |

## 📤 Cuerpo de la Petición (req.body.idusuario)

Debe incluir el ID y los campos a modificar.

| Campo     | Tipo   | Requerido | Descripción                                        |
| --------- | ------ | --------- | -------------------------------------------------- |
| idusuario | string | Sí        | ID del usuario a modificar (criterio de búsqueda). |
| nombre    | string | No        | Nuevo nombre.                                      |
| email     | string | No        | Nuevo email.                                       |
| telefono  | string | No        | Nuevo teléfono.                                    |

## ✅ Respuesta Exitosa (200 OK)

```json
{
  "mensaje": "Usuario actualizado correctamente"
}
```

# 5. Borrar Usuario (Delete)

Elimina un registro de usuario de la base de datos, identificado por su `idusuario`.

## ➡️ Endpoint

| Método | Ruta                                  |
| ------ | ------------------------------------- |
| DELETE | /api/usuario/borrarusuario/:idusuario |

## 📤 Cuerpo de la Petición (req.body)

Solo necesita el ID del usuario a eliminar.

| Campo     | Tipo   | Requerido | Descripción                |
| --------- | ------ | --------- | -------------------------- |
| idusuario | string | Sí        | ID del usuario a eliminar. |

## ✅ Respuesta Exitosa (200 OK)

```json
{
  "mensaje": "Usuario borrado correctamente"
}
```
