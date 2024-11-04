import React from "react";
import '../styles/titular.css';


function Titular (props) {
     return(

      
      <div className='container-notice-titular'>
       <div className="container-img-titular">
       <img
       className="img-titular"
       src={require("../imagenes/imagen-titular.jpg")}
        alt=" "        />       
       </div>
       
 <div className="container-text-titular">
        <p className='title-notice-titular'>
          <strong>{props.nombre}</strong>
        </p>
        <p className='text-information-titular'>{props.informacion}</p>
      </div>
      </div>
  
  

     )
};

export default Titular;
