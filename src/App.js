import './App.css';
import Navbar from './componentes/navbar.jsx';
import Informacion from './componentes/informacion.js';
import Titular from './componentes/titular.jsx';
import RecomendacionEnlace from './componentes/recomendacion.jsx';
import { Bentonoti } from './componentes/bento.jsx';

function App() {
  return (
   
   <><div className="App-navbar">
       <Navbar></Navbar>
       
        
    </div>
    <div className='body-blog'>
      <div className='container-titular'>
      
       <Titular 
      nombre= 'Vulnerabilidad en las API ??? '
      informacion='<![CDATA[Tutoriales prácticos: Desde lo básico hasta técnicas avanzadas, para ayudarte a mejorar tus habilidades. 
        Consejos y trucos: Estrategias que he aprendido en mi carrera para optimizar tu flujo de trabajo. 
        Novedades del sector: Actualizaciones sobre las últimas tendencias y tecnologías que no te puedes perder. 
        Reflexiones personales: Mis experiencias y aprendizajes en el camino del desarrollo. 
        Mi objetivo es crear una comunidad donde podamos aprender y crecer juntos. ¡Espero que disfrutes del contenido y no dudes en dejar tus comentarios y sugerencias!]]>'

    
      />
      </div>

      <div className='Container-Notice-Concern'> 
      <Informacion 

        imagen='recomendacion'
        nombre= 'DESARROLLADORES DESMPLEADOS POR IA!!'
        
        informacion=' La Revolución de la Inteligencia Artificial en el Desarrollo de Software 
        En los últimos años, la inteligencia artificial (IA) ha transformado numerosos sectores, y el desarrollo de software no es la excepción. 
        
        '
      />
      <Informacion 
      imagen= 'info'
        nombre= 'DESARROLLADORES DESMPLEADOS POR IA!!'
        
        informacion=' La Revolución de la Inteligencia Artificial en el Desarrollo de Software 
        En los últimos años, la inteligencia artificial (IA) ha transformado numerosos sectores, y el desarrollo de software no es la excepción. 
        
        
        '
      />
      <Informacion 
      imagen= 'info'
        nombre= 'DESARROLLADORES DESMPLEADOS POR IA!!'
        
        informacion=' La Revolución de la Inteligencia Artificial en el Desarrollo de Software 
        En los últimos años, la inteligencia artificial (IA) ha transformado numerosos sectores, y el desarrollo de software no es la excepción. 
        
        '
      />
      
      

      

       </div>
        
       <div className='apartado-comunicado'>
          <RecomendacionEnlace/>


       </div>
       <article  className='sect-bento'>
        <Bentonoti />
       </article>
      </div>

      
 </>
  ); 
  
}

export default App;
