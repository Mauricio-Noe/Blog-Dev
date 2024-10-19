/*import React from "react";
import { useState } from "react";
 import '../styles/recomendacion.css';
function Elaceocultoyclick (){
    const[oculto, setmostrado]= useState (false);

    const  Cambio =()=>{
     setmostrado(!oculto);

     
       return(
         <div>    
               <p className="sub-text">
                 
                 <i><strong>Te recomiendo leer sobre buenas practicas al momento de usar el STYLES en tu proyecto ☺☺☺</strong></i> </p> 
     
                 <p className="elace-text" onClick={Cambio}> Haz Click para leer la informacion</p>
           </div>   
        
         /*<div className="enlace-recomendacion" onClick={true}>
             
            
         </div>*/
/*       )
    }; 

    export default Elaceocultoyclick;
};    
 



*/
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
