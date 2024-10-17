import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar.js';
import Informacion from './componentes/informacion.jsx';
import Titular from './componentes/titular.jsx';

function App() {
  return (
   
   <><div className="App">
      <Navbar></Navbar>

      <p> ¡Hola, desarrolladores y entusiastas de la tecnología! Soy [Tu Nombre], un apasionado del desarrollo de software y la innovación. En este espacio, compartiré mis experiencias, tutoriales, y recursos útiles sobre [temas específicos que cubrirás, como programación, frameworks, herramientas, etc.].

        Aquí encontrarás:

        Tutoriales prácticos: Desde lo básico hasta técnicas avanzadas, para ayudarte a mejorar tus habilidades.
        Consejos y trucos: Estrategias que he aprendido en mi carrera para optimizar tu flujo de trabajo.
        Novedades del sector: Actualizaciones sobre las últimas tendencias y tecnologías que no te puedes perder.
        Reflexiones personales: Mis experiencias y aprendizajes en el camino del desarrollo.
        Mi objetivo es crear una comunidad donde podamos aprender y crecer juntos. ¡Espero que disfrutes del contenido y no dudes en dejar tus comentarios y sugerencias!

        ¡Vamos a codificar!</p>
    </div>
    <div className='body-blog'>
      <Titular 

      nombre= 'Vulnerabilidad en las API ??? '
      informacion='<![CDATA[Tutoriales prácticos: Desde lo básico hasta técnicas avanzadas, para ayudarte a mejorar tus habilidades. 
        Consejos y trucos: Estrategias que he aprendido en mi carrera para optimizar tu flujo de trabajo. 
        Novedades del sector: Actualizaciones sobre las últimas tendencias y tecnologías que no te puedes perder. 
        Reflexiones personales: Mis experiencias y aprendizajes en el camino del desarrollo. 
        Mi objetivo es crear una comunidad donde podamos aprender y crecer juntos. ¡Espero que disfrutes del contenido y no dudes en dejar tus comentarios y sugerencias!]]>'

    
      />
     <div className='conatiner-notice'>
      <Informacion 
        nombre= 'DESARROLLADORES DESMPLEADOS POR IA!!'
        area= 'desarrollo de software'
        informacion=' La Revolución de la Inteligencia Artificial en el Desarrollo de Software

        En los últimos años, la inteligencia artificial (IA) ha transformado numerosos sectores, y el desarrollo de software no es la excepción. Con el avance de tecnologías como el aprendizaje automático y la generación de código automatizada, muchas tareas que antes requerían la intervención humana están comenzando a ser realizadas por máquinas.
        
        Uno de los principales beneficios de la IA en el desarrollo es la capacidad de aumentar la productividad. Herramientas como asistentes de codificación y generadores de código pueden ayudar a los desarrolladores a completar tareas repetitivas y tediosas, permitiéndoles centrarse en problemas más complejos y creativos. Esto no significa que los desarrolladores estén siendo reemplazados, sino que su rol está evolucionando.'

      />
       </div>

       <Informacion 
        nombre= 'DESARROLLADORES DESMPLEADOS POR IA!!'
        area= 'desarrollo de software'
        informacion=' La Revolución de la Inteligencia Artificial en el Desarrollo de Software

        En los últimos años, la inteligencia artificial (IA) ha transformado numerosos sectores, y el desarrollo de software no es la excepción. Con el avance de tecnologías como el aprendizaje automático y la generación de código automatizada, muchas tareas que antes requerían la intervención humana están comenzando a ser realizadas por máquinas.
        
        Uno de los principales beneficios de la IA en el desarrollo es la capacidad de aumentar la productividad. Herramientas como asistentes de codificación y generadores de código pueden ayudar a los desarrolladores a completar tareas repetitivas y tediosas, permitiéndoles centrarse en problemas más complejos y creativos. Esto no significa que los desarrolladores estén siendo reemplazados, sino que su rol está evolucionando.'

      />
      <Informacion 
        nombre= 'DESARROLLADORES DESMPLEADOS POR IA!!'
        area= 'desarrollo de software'
        informacion=' La Revolución de la Inteligencia Artificial en el Desarrollo de Software

        En los últimos años, la inteligencia artificial (IA) ha transformado numerosos sectores, y el desarrollo de software no es la excepción. Con el avance de tecnologías como el aprendizaje automático y la generación de código automatizada, muchas tareas que antes requerían la intervención humana están comenzando a ser realizadas por máquinas.
        
        Uno de los principales beneficios de la IA en el desarrollo es la capacidad de aumentar la productividad. Herramientas como asistentes de codificación y generadores de código pueden ayudar a los desarrolladores a completar tareas repetitivas y tediosas, permitiéndoles centrarse en problemas más complejos y creativos. Esto no significa que los desarrolladores estén siendo reemplazados, sino que su rol está evolucionando.'

      />
      <Informacion 
        nombre= 'DESARROLLADORES DESMPLEADOS POR IA!!'
        area= 'desarrollo de software'
        informacion=' La Revolución de la Inteligencia Artificial en el Desarrollo de Software

        En los últimos años, la inteligencia artificial (IA) ha transformado numerosos sectores, y el desarrollo de software no es la excepción. Con el avance de tecnologías como el aprendizaje automático y la generación de código automatizada, muchas tareas que antes requerían la intervención humana están comenzando a ser realizadas por máquinas.
        
        Uno de los principales beneficios de la IA en el desarrollo es la capacidad de aumentar la productividad. Herramientas como asistentes de codificación y generadores de código pueden ayudar a los desarrolladores a completar tareas repetitivas y tediosas, permitiéndoles centrarse en problemas más complejos y creativos. Esto no significa que los desarrolladores estén siendo reemplazados, sino que su rol está evolucionando.'
      
      />
      </div>
 </>
  ); 
  
}

export default App;
