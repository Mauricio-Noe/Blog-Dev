import React, { useState, useEffect } from "react";
import "..//styles-secundarios/contacto.css";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar los datos (por ejemplo, a un servidor)
    console.log("Formulario enviado:", formData);
  };
 useEffect=(( )=>{


 }, [])
  return (
    <div className="container-contacto">
      <h1>Ponte en contacto con nosotros</h1>
      <form onSubmit={handleSubmit} className="container-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

/*import React from "react";
import { useState, useEffect } from "react";

const [formdata, setformdata] =useState({
nombre:"",
correo:"",
mensaje:""

});



export const Contacto =() => {
    return(
        <div className="container-contacto">
       <h1>Ponte en contaco con nosotros </h1>
       <ul className="conatainer-form ">
       <li > nombre    </li>
            
     <li> correo</li>
     <li> mensaje </li>
     <li></li>
     <button type="button"> enviar </button>
       </ul>
        </div>
    );
};*/