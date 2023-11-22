import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/register">Cadastro</Link>
          <br />
          <Link to="/welcome">Bem-vindo</Link>
          <br />
          <Link to="/profile">Editar Perfil</Link>
          <br />
          <Link to="/see-profile">Ver Perfil</Link>
          <br />
          <Link to="/rooms">Quartos</Link>
          <br />
          <Link to="/success">Sucesso</Link>
          <br />
          <Link to="/adm">Administrador</Link>
          <br />
        </p>
      </header>
    </div>
  );
}

export default App;
