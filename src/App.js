import './App.css';
import Navbar from './componentes/navbar.jsx';
import Informacion from './componentes/informacion.js';
import Titular from './componentes/titular.jsx';
import RecomendacionEnlace from './componentes/recomendacion.jsx';
import { Bentonoti } from './componentes/bento.jsx';
import Footer from './componentes/footer.jsx';

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


      <>      
    
      <div className='Container-Notice-Concern'> 
<Informacion 
  imagen="desarrolloweb"
  nombre="Los Mejores Consejos para Empezar en el Desarrollo Web"
  informacion='Descubre los lenguajes y recursos esenciales para crear tu primer sitio web desde cero.'
/>
      <Informacion 
  imagen="2"
  nombre="DESARROLLADORES DESEMPLEADOS POR IA!!"
  informacion='La Revolución de la Inteligencia Artificial en el Desarrollo de Software.
  En los últimos años, la inteligencia artificial (IA) ha transformado numerosos sectores, y el desarrollo de software no es la excepción.'
/>
<Informacion 
  imagen="responsive"
  nombre="Diseño Responsivo: ¿Por Qué es Tan Importante?"
  informacion='Aprende cómo hacer que tus sitios web se vean increíbles en cualquier dispositivo.'
/>
       </div>
         </>
       <div className='apartado-comunicado'>
          <RecomendacionEnlace/>


       </div>
       <article  className='sect-bento'>
        <Bentonoti />
       </article>
      </div>



      <>
      <Footer />
      </>

      
 </>
  ); 
  
}

export default App;
