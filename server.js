const express = require("express");
const app = express();
//importar mongoDB
const archivoDB = require("./conexion");

//body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//rutas
const rutausuario = require("./rutas/usuario");

app.use("/api/usuario", rutausuario);

app.get("/", (req, res) => {
  res.end("bienvenidos al servidor Node.js");
});

//configurar server
app.listen(5000, function () {
  console.log("el servidor esta corriendo");
});
