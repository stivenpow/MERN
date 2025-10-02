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
