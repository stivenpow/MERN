const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemausuario = new eschema({
  nombre: String,
  email: String,
  telefono: String,
  idusuario: String,
});

const ModeloUsuario = mongoose.model("usuarios", eschemausuario);
module.exports = router;
/* //prueba
router.get("/test", (req, res) => {
  res.end("saludo desde ruta test");
});*/
/*
//agregar usuario

router.post("/agregarusuario", (req, res) => {
  const nuevousuario = new ModeloUsuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idusuario: req.body.idusuario,
  });
  console.log("antes ruta save");
  nuevousuario.save(function (err) {
    if (!err) {
      res.send("Usuario agregado correctamente");
    } else {
      res.send(err);
    }
  });
});*/

// 1. Convertir la función a 'async'
router.post("/agregarusuario", async (req, res) => {
  const nuevousuario = new ModeloUsuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idusuario: req.body.idusuario,
  });

  console.log("antes ruta save");

  // 2. Usar try...catch para manejar éxito/error
  try {
    // 3. CRUCIAL: Usar 'await' y eliminar el callback
    await nuevousuario.save();

    // Respuesta de éxito
    res.status(200).send("Usuario agregado correctamente");
  } catch (error) {
    // Respuesta de error
    console.error(error); // Puedes usar console.error para ver el error
    res.status(500).send("Error al guardar el usuario: " + error.message);
  }
});
/*
//obtener todos los usuarios obtenerusuarios
router.get("/obtenerusuarios", (req, res) => {
  ModeloUsuario.find({}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});*/

router.get("/obtenerusuarios", async (req, res) => {
  try {
    // CRUCIAL: Usar 'await' con .find() y SIN el callback
    const docs = await ModeloUsuario.find({});

    // Respuesta de éxito: enviar los documentos como JSON
    // Nota: es mejor usar res.json() para enviar datos estructurados
    res.json(docs);
  } catch (error) {
    // Respuesta de error: si falla la conexión o la consulta
    console.error("Error al obtener usuarios:", error);
    res
      .status(500)
      .send("Error del servidor al obtener datos: " + error.message);
  }
});

router.post("/obtenerdatausuario", async (req, res) => {
  try {
    // CRUCIAL: Usar 'await' con .find() y SIN el callback
    const docs = await ModeloUsuario.find({ idusuario: req.body.idusuario });

    // Respuesta de éxito: enviar los documentos como JSON
    // Nota: es mejor usar res.json() para enviar datos estructurados
    res.json(docs);
  } catch (error) {
    // Respuesta de error: si falla la conexión o la consulta
    console.error("Error al obtener usuarios:", error);
    res
      .status(500)
      .send("Error del servidor al obtener datos: " + error.message);
  }
});

//actualiza usuario
/*
router.post("/actualizausuario", async (req, res) => {
  console.log("antes ruta actualizar");
  ModeloUsuario.findOneAndUpdate(
    {
      id: req.body.idusuario,
    },
    {
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono,
    },
    (err) => {
      if (!err) {
        res.send("Usuario agregado correctamente");
      } else {
        res.send(err);
      }
    }
  );
});*/

//  Actualización
router.put("/actualizausuario", async (req, res) => {
  console.log("antes ruta actualizar");

  try {
    // 1. Usar await para esperar la operación de Mongoose SIN el callback
    await ModeloUsuario.findOneAndUpdate(
      {
        // Criterio de búsqueda (ID del usuario a actualizar)
        idusuario: req.body.idusuario, // Asumiendo que el campo en tu modelo es 'idusuario'
      },
      {
        // Datos a actualizar
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
      }
    );

    // 2. Respuesta de éxito
    res.status(200).json({ mensaje: "Usuario actualizado correctamente" });
  } catch (error) {
    // 3. Respuesta de error
    console.error("Error al actualizar usuario:", error);

    // Envía un error 400 o 500 con el mensaje de Mongoose
    res.status(400).json({
      mensaje: "Fallo al actualizar el usuario.",
      errorDetalle: error.message,
    });
  }
});

//borrar
router.delete("/borrarusuario/:idusuario", async (req, res) => {
  // Asumimos que el frontend envía el ID del usuario en el cuerpo (body) de la solicitud
  const id = req.params.idusuario;

  console.log(`Intentando borrar usuario con ID: ${id}`);

  try {
    // Usa findOneAndDelete para encontrar y eliminar el documento por su ID.
    // Asumiendo que el campo en tu modelo es 'idusuario'
    await ModeloUsuario.findOneAndDelete({ idusuario: id });

    // Respuesta de éxito
    res.status(200).json({ mensaje: "Usuario borrado correctamente" });
  } catch (error) {
    // Respuesta de error
    console.error("Error al borrar usuario:", error);

    // Envía un mensaje de error específico
    res.status(400).json({
      mensaje: "Fallo al borrar el usuario.",
      errorDetalle: error.message,
    });
  }
});
