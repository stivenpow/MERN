import React, { useEffect, useState } from "react";
import Usuario from "./Usuario";
import axios from "axios";

function ListaUsuarios() {
  const [datausuarios, setdatausuario] = useState([]);

  useEffect(() => {
    axios
      .get("api/usuario/obtenerusuarios")
      .then((res) => {
        console.log(res);
        setdatausuario(res.data);
      })
      .catch((err) => {
        if (err.response) {
          // La solicitud fue hecha y el servidor respondió con un código de estado (e.g., 400 o 500)
          console.error(
            "Error del Servidor (4xx/5xx):",
            err.response.data.errorDetalle
          );
          alert(`Error al guardar: ${err.response.data.errorDetalle}`);
        } else {
          // El servidor no respondió (e.g., problema de red)
          console.error("Error de Red o Configuración:", err.message);
          alert("No se pudo conectar con el servidor.");
        }
      });
  }, []);

  //mapear
  const listausuarios = datausuarios.map((usuario) => {
    return (
      <div key={usuario.idusuario}>
        <Usuario usuario={usuario} />
      </div>
    );
  });

  return (
    <div>
      <h2>Lista de usuarios</h2>
      {listausuarios}
    </div>
  );
}

export default ListaUsuarios;
