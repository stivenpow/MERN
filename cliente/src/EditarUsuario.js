import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function EditarUsuario() {
  const params = useParams();

  //Hook
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    axios
      .post("/api/usuario/obtenerdatausuario", { idusuario: params.idusuario })
      .then((res) => {
        console.log(res.data[0]);
        const datausuario = res.data[0];
        setNombre(datausuario.nombre);
        setEmail(datausuario.email);
        setTelefono(datausuario.telefono);
      });
  }, []);

  //Funcion que actualiza
  function editarUsuario() {
    var usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: params.idusuario,
    };
    console.log(usuario);
    /*
    axios.put("/api/usuario/agregarusuario", usuario).then((res) => {
      alert(res.data).then((err) => {
        console.log("error axios");
      });
    });*/
    axios
      .put("/api/usuario/actualizausuario", usuario)
      .then((res) => {
        // 1. Mostrar la alerta de éxito
        // Usamos 'res.data' para el mensaje que viene del servidor
        alert(res.data.mensaje);
        console.log(res.data);
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
  }

  return (
    <div className="container">
      <div className="row">
        <div className="mt-4">
          <h2>Agregar usuario</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              className="form-control"
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            ></input>
          </div>
          <button onClick={editarUsuario} className="btn btn-success">
            Guardar Usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarUsuario;
