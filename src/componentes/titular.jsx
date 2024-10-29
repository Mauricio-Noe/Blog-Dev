import React from "react";
import '../styles/titular.css';


function Titular (props) {
     return(

      
      <div className='container-notice-titular'>
       <img
       className="img-titular"
       src={require("../imagenes/img-titular.jpg")}
/>        <div className="semi-section">
        <p className='title-notice-titular'>
          <strong>{props.nombre}</strong>
        </p>
        <p className='text-information-titular'>{props.informacion}</p>
      </div></div>
  
  

     )
};

export default Titular;