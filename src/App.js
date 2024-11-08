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
      informacion='Vulnerabilidades en las API: Riesgos y Mejores Prácticas para una Integración Segura

Riesgos comunes: Las API son una poderosa herramienta, pero también pueden ser un punto de entrada para ataques si no están bien protegidas. Las vulnerabilidades comunes incluyen la falta de autenticación segura, exposición de datos sensibles y una gestión insuficiente de permisos.

Consejos y prácticas de seguridad: A lo largo de mi carrera, he aprendido algunas estrategias clave para proteger las API. Esto incluye implementar autenticación robusta (como OAuth o tokens JWT), limitar las solicitudes mediante rate-limiting, y utilizar HTTPS para todas las comunicaciones.

'

    
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
      <section className='footer'>
    
      <Footer />
      </section>
        
      </>

      
 </>
  ); 
  
}

export default App;
