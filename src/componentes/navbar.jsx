/*import React, { useState } from 'react';
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
        <li><a className="opc-nav" href='../componentes-secundarios/post-publicas.jsx'>Publicados</a></li>
        <li><a className="opc-nav" href="#">Cuenta</a></li>
        <li><a className="opc-nav" href="#">Salir</a></li>
      </ul>
    </section>
  );
};

export default Navbar;
*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isAbierta, setAbierta] = useState(false);

  const toggleMenu = () => {
    setAbierta(!isAbierta);
  };

  return (
    <section className="blog-inicio">
      <div className="navbar-blog">
        <Link className='opc-nav' to="/">
        blog-developer
        </Link>
      </div>
      <div className="activacion" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={`opciones-navbar ${isAbierta ? 'active' : ''}`}>
        <li><Link className="opc-nav" to="/">Inicio</Link></li>
        <li><Link className="opc-nav" to="/publicados">Publicados</Link></li>
        <li><Link className="opc-nav" to="/cuenta">Cuenta</Link></li>
        <li><Link className="opc-nav" to="/salir">Salir</Link></li>
      </ul>
    </section>
  );
};

export default Navbar;
