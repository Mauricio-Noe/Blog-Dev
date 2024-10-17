import React,{useState} from 'react';
import '../styles/Navbar.css';


const Navbar = () => {
const [isabierta, setabierta]= useState(false);

const togglemenu = ()=>{
    setabierta(!isabierta);
};
  return(
    <section  className="blog-inicio">
      
      <div className="navbar-blog">
        blog-developer </div>
     <div className='activacion'onClick={togglemenu}> &#9776;</div>
       
       <ll className={`opciones-navbar ${isabierta ? `active` :``}` }>
        <ul><a className='opc-nav' href='#'> Inicio</a> </ul>
        <ul><a className='opc-nav' href='#'> Notificacion</a> </ul>
        <ul><a className='opc-nav' href='#'> Cuenta</a> </ul>
        <ul><a className='opc-nav' href='#'> Salir</a> </ul>
       
        </ll>
            

    
    </section>
  )
};
export default Navbar;
