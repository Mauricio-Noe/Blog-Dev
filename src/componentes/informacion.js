import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/informacion-props.css'; 

function Informacion(props) {
 const navigate = useNavigate();
  const handclick=() =>{
   navigate("/publicados");
 };

     return(
 
       <div className='container-notice' onClick={handclick}>
      
      <div className='container-notice-text'>
        
        <p className='title-notice'>
          <strong>{props.nombre}</strong>
        </p>
        
        <img className="img-info"
                src={require(`../imagenes/informacion-${props.imagen}.jpg`)}
        alt=" "
        />
        <p className='text-information'>{props.informacion}</p>
      </div>
    
  

 </div> 
     )
};

export default Informacion;

