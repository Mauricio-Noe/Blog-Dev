
import React, { useState, useEffect } from "react";

export const Contacto = () => {
  // Estado numérico inicializado en 0
  const [cambio, setcambio] = useState(0);

  // useEffect se ejecuta cada vez que `cambio` cambia
  useEffect(() => {
    console.log("El valor de 'cambio' ha cambiado a:", cambio);
  }, [cambio]); // Dependencia: se ejecuta cuando `cambio` cambia

  return (
    <div>
      <h1>El valor de cambio es: {cambio}</h1>
      <button onClick={() => setcambio(cambio + 1)}>Incrementar</button>
    </div>
  );
};
