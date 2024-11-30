import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/home">Inicio</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/Proyectos">Proyectos</a>
        </li>
        <li>
          <a href="/recursos">Recursos</a>
        </li>
        <li>
          <a href="/pruebas">Pruebas</a>
        </li>
        <li>
          <a href="/metricas">Metricas</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;