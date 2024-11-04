import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isAbierta, setAbierta] = useState(false);

  const toggleMenu = () => {
    setAbierta(!isAbierta);
  };

  return (
    <section className="blog-inicio">
      <div className="navbar-blog">
        blog-developer
      </div>
      <div className="activacion" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={`opciones-navbar ${isAbierta ? 'active' : ''}`}>
        <li><a className="opc-nav" href="#">Inicio</a></li>
        <li><a className="opc-nav" href="#">Notificación</a></li>
        <li><a className="opc-nav" href="#">Cuenta</a></li>
        <li><a className="opc-nav" href="#">Salir</a></li>
      </ul>
    </section>
  );
};

export default Navbar;
