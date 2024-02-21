import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Sistema de Recursos Humanos
          </Link>
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
              <NavItem path="/" label="Inicio" />
              <NavItem path="/agregar" label="Agregar Empleado" />
              {/* Agrega más elementos de navegación según sea necesario */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ path, label }) => (
  <li className="nav-item">
    <Link className="nav-link" to={path}>
      {label}
    </Link>
  </li>
);

export default Navegacion;
