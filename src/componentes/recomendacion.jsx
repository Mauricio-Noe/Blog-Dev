import React from "react";
import '../styles/recomendacion.css';
 
 
 function RecomendacionEnlace(){
 
  const handeclick =()=>{
window.location.assign("sssssssssssss")
  };

 return( 
    

         <div className="container-reco" onClick={handeclick} >    
               <p className="sub-text">
                 
                 <i><strong>Te recomiendo leer sobre buenas practicas al momento de usar el STYLES en tu proyecto ☺☺☺</strong></i> </p> 
                 <p>Tutoriales prácticos: Desde lo básico hasta técnicas avanzadas, para ayudarte a mejorar tus habilidades. 
        Consejos y trucos: Estrategias que he aprendido en mi carrera para optimizar tu flujo de trabajo. 
        Novedades del sector: Actualizaciones sobre las últimas tendencias y tecnologías que no te puedes perder. 
        Reflexiones personales: Mis experiencias y aprendizajes en el camino del desarrollo. 
        Mi objetivo es crear una comunidad donde podamos aprender y crecer juntos. ¡Espero que disfrutes del contenido y no dudes en dejar tus comentarios y sugerencias!</p>
     
                 <p className="elace-text"> </p>
                 <a href="#" className="link-reco">Haz Click para leer la informacion</a>
           </div>   
 )
  };
        export default RecomendacionEnlace;

 



/*
import React, { useState } from "react";
import '../styles/recomendacion.css';

function Elaceocultoyclick() {
    const [oculto, setmostrado] = useState(false);

    const Cambio = () => {
        setmostrado(!oculto);
    };

    return (
        <div>
            <p className="elace-text" onClick={Cambio}>
                Haz Click para {oculto ? 'ocultar' : 'leer'} la información
            </p>
            {oculto && (
                <p className="sub-text">
                    <i>
                        <strong>
                            Te recomiendo leer sobre buenas prácticas al momento de usar el STYLES en tu proyecto ☺☺☺
                        </strong>
                    </i>
                </p>
            )}
        </div>
    );
}

export default Elaceocultoyclick;
*/
 
