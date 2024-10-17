import React from "react";
import '../styles/titular.css'


function Titular (props) {
     return(
 <div>
       <div className='container-titular'>
      
      <div className='container-notice-titular'>
        <p className='title-notice-titular'>
          <strong>{props.nombre}</strong>
        </p>
        <p className='text-information-titular'>{props.informacion}</p>
      </div>
    </div>
  

 </div> 
     )
};

export default Titular;