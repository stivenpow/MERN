import logo from "./logo.svg";
import "./App.css";
import ListaUsuarios from "./ListaUsuarios";
import AgregarUsuario from "./AgregarUsuario";
import EditarUsuario from "./EditarUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1></h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            CRUD usuario react
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="agregarusuario"
                >
                  agregar usuario
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios />}></Route>
          <Route path="/agregarusuario" element={<AgregarUsuario />}></Route>
          <Route
            path="/editarusuario/:idusuario"
            element={<EditarUsuario />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
