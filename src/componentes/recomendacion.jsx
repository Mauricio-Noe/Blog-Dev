import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/recomendacion.css';
 
 
 function RecomendacionEnlace(){
 const navigate =useNavigate(); 
  const handeclick =()=>{
   navigate("/publicados");
};

 return( 
    

   <div className="container-reco" onClick={handeclick} >    
           <p className="titulo-reco">
           <i><strong>Te recomiendo leer sobre buenas practicas al momento de usar el STYLES en tu proyecto ☺☺☺</strong></i>  
            
           </p>
               <p className="sub-text">
          
           Tutoriales prácticos: Desde lo básico hasta técnicas avanzadas, para ayudarte a mejorar tus habilidades. 
                 
        Consejos y trucos: Estrategias que he aprendido en mi carrera para optimizar tu flujo de trabajo. 
        Novedades del sector: Actualizaciones sobre las últimas tendencias y tecnologías que no te puedes perder. 
        Reflexiones personales: Mis experiencias y aprendizajes en el camino del desarrollo. 
        Mi objetivo es crear una comunidad donde podamos aprender y crecer juntos. ¡Espero que disfrutes del contenido y no dudes en dejar tus comentarios y sugerencias!</p>
     
                 <p className="elace-text"> </p>
                 <Link className="link-reco" to="/publicados" >Haz Click para leer la informacion</Link>
           </div>   
 )
  };
        export default RecomendacionEnlace;

 



