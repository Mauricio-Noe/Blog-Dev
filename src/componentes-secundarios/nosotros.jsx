import React from "react";
import LOGO from "../imagenes/imgnosotros.png"; // Removed extra slash
import "../styles-secundarios/nosotros.css";

export const Nosotros = () => {
  return (
    <div className="container-nostros">
      <img className="logo-img" src={LOGO} alt="Logo" />
      <section className="sect-main">
        <h1>
          <i> BLOG DEV</i>
        </h1>
        <h2>
          <i> DESARROLLO DE CONOCIMIENTO </i>
        </h2>
        <p>
          "Nos especializamos en brindar herramientas y conocimientos a
          personas que están dando sus primeros pasos en el campo. Nuestra
          misión es ayudar a quienes inician su carrera, proporcionándoles la
          formación y el conocimiento necesario para tener éxito. Enfocamos
          nuestros esfuerzos en capacitar a aquellos que recién comienzan, para
          que puedan adquirir los conocimientos fundamentales que les permitan
          desarrollarse y prosperar en su área."
        </p>
        <div></div>
      </section>
    </div>
  );
};
