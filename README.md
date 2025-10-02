# 🚀 CRUD Usuario (MERN Stack)

Este es un proyecto de demostración que implementa las cuatro operaciones fundamentales **CRUD** (**Crear**, **Leer**, **Actualizar** y **Eliminar**) para la gestión de usuarios. Utiliza la arquitectura **MERN** (**M**ongoDB, **E**xpress, **R**eact y **N**ode.js) y sigue prácticas de **API RESTful**.

## 🛠️ Tecnologías Utilizadas

| Categoría       | Tecnología                 | Descripción                                            |
| :-------------- | :------------------------- | :----------------------------------------------------- |
| **Frontend**    | **React** (Vite/CRA)       | Interfaz de usuario dinámica y gestión de componentes. |
| **Routing**     | `react-router-dom`         | Navegación entre las vistas de la aplicación.          |
| **HTTP Client** | **Axios**                  | Cliente para realizar peticiones HTTP al backend.      |
| **Backend**     | **Node.js** & **Express**  | Servidor de aplicaciones y gestión de rutas.           |
| **Database**    | **MongoDB** & **Mongoose** | Base de datos NoSQL y modelado de datos.               |
| **Styling**     | **Bootstrap** (opcional)   | Framework CSS para un diseño responsivo y rápido.      |

## ⚙️ Configuración e Instalación

Sigue estos pasos para levantar el proyecto localmente.

### 1. Requisitos Previos

- **Node.js** (versión 16+) y `npm` o `yarn`.
- Una instancia de **MongoDB** (local o en la nube, ej. Atlas).

### 2. Configuración del Backend (Raíz del Proyecto)

1.  **Instalar dependencias:**

    ```bash
    npm init -y
    npm install express mongoose nodemon

    ```

2.  **Configurar la conexión a MongoDB:**
    Crea un archivo `conexion.js` en la raíz del proyecto y añade la URI de conexión:

```javascript
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crudmern");
const objetobd = mongoose.connection;
objetobd.on("connected", () => {
  console.log("Conexion correcta a MongoDB");
});
objetobd.on("error", () => {
  console.log("error en la conexion a MongoDB");
});
module.exports = mongoose;
```

3.  **Iniciar el servidor:**

    ```bash
    nodemon server.js # o el comando que uses para iniciar Node/Express - npm start

    ```

    El servidor se ejecutará en `http://localhost:5000`.

    ### 3. Configuración del Frontend (`/cliente`)

1.  **Moverse al directorio del frontend:**

    ```bash
    npx create-react-app cliente
    cd cliente/ # O el nombre de tu carpeta de React

    ```

1.  **Instalar dependencias:**

    ```bash

    npm install axios react-router-dom body-parser

    ```

1.  **Iniciar la aplicación React:**

    ```bash
    npm run dev # (Si usas Vite)
    # o
    npm start # (Si usas Create React App)
    ```

    La aplicación se abrirá en `http://localhost:3000`.

    ## 🧭 Estructura de Rutas

El API del backend sigue los principios de **RESTful** usando parámetros de URL para las operaciones de modificación.

| Operación      | Método   | Ruta (API Endpoint)                        | Función Principal                                          |
| :------------- | :------- | :----------------------------------------- | :--------------------------------------------------------- |
| **Crear**      | `POST`   | `/api/usuario/agregarusuario`              | `nuevousuario.save()`                                      |
| **Leer Todos** | `GET`    | `/api/usuario/obtenerusuarios`             | `ModeloUsuario.find({})`                                   |
| **Leer Uno**   | `GET`    | `/api/usuario/obtenerdatausuario`          | `ModeloUsuario.find({request.body.idusuario})`             |
| **Actualizar** | `PUT`    | `/api/usuario/actualizausuario/:idusuario` | `ModeloUsuario.findOneAndUpdate(request.body.idusuario)`   |
| **Eliminar**   | `DELETE` | `/api/usuario/borrarusuario/:idusuario`    | `ModeloUsuario.findOneAndDelete(request.params.idusuario)` |

### Ejemplo de Petición `DELETE`

```javascript
// Petición desde el Frontend (Axios)
const id = "mg782fft";

axios
  .delete(`/api/usuario/borrarusuario/${id}`)
  .then((res) => console.log("Borrado exitoso:", res.data.mensaje));
```

---

### Bloque 6: Aspectos Destacados e Contribución

## ⚠️ Aspectos Destacados de la Implementación

- **Asincronía**: Todas las rutas del backend usan la sintaxis **`async/await`** para manejar las operaciones de Mongoose de forma no bloqueante.
- **Manejo de Errores**: Se utiliza el bloque **`try...catch`** en el backend para capturar errores de validación de Mongoose o de la base de datos, retornando códigos de estado HTTP apropiados (**`400`**, **`500`**) y mensajes detallados.
- **Routing de Componentes**: Tras la acción de eliminar un usuario, la aplicación utiliza `window.location.href = '/'` para redirigir a la vista de la lista, forzando la recarga de datos al remontar el componente `ListaUsuarios`.

---

## 🧑‍💻 Contribución

¡Las **contribuciones son bienvenidas**! Si deseas mejorar el código, reportar un _bug_ o añadir funcionalidades, por favor, abre un _issue_ o envía un _pull request_.
