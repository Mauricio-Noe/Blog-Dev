import React from "react";
import '../styles/informacion-props.css'; 

function Informacion (props) {
     return(
 <div>
       <div className='container-notice'>
      
      <div className='container-notice-text'>
        <p className='title-notice'>
          <strong>{props.nombre}</strong>
        </p>
        
        <p className='text-information'>{props.informacion}</p>
      </div>
    </div>
  

 </div> 
     )
};

export default Informacion;

