import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Usuario({ usuario }) {
  const navigate = useNavigate(); //  Inicializar useNavigate

  // FUNCIÓN DE BORRADO DECLARADA LOCALMENTE
  const onClickborrar = () => {
    if (window.confirm(`¿Estás seguro de eliminar a ${usuario.nombre}?`)) {
      axios
        .delete(`/api/usuario/borrarusuario/${usuario.idusuario}`)
        .then((res) => {
          alert(res.data.mensaje);

          //  Redirigir al inicio (donde está ListaUsuarios)
          //navigate("/");
          //  SOLUCIÓN DE RECARGA: Fuerza el reinicio de la aplicación
          window.location.href = "/";
        })
        .catch((err) => {
          console.error(
            "Error al borrar el usuario:",
            err.response.data.errorDetalle
          );
          alert(`Error al borrar: ${err.response.data.errorDetalle}`);
        });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group-item">
            <li className="list-group-item">{usuario.idusuario}</li>
            <li className="list-group-item">{usuario.nombre}</li>
            <li className="list-group-item">{usuario.email}</li>
            <li className="list-group-item">{usuario.telefono}</li>
          </ul>
          <Link to={`/editarusuario/${usuario.idusuario}`}>
            <li className="btn btn-success">Editar</li>
          </Link>
          &nbsp;
          <button className="btn btn-danger" onClick={onClickborrar}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Usuario;
