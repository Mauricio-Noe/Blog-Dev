

/*
export const Postpublic = () => {
    const [post, setPost] = useState(null); // Estado para manejar el post
    const [login, setLogin] = useState(false); // Estado para manejar el login

    useEffect(() => {
        // Simulación de cargar un post
        setPost("Este es un post simulado. Aquí va el contenido.");
    }, []);

    return (
        <div className="subinicio">
            {post ? (
                <div className="post-content">
                    <h2>Post del Día</h2>
                    <p>{post}</p>
                </div>
            ) : (
                <p>No hay post disponibles.</p>
            )}

            {login ? (
                <div className="login-status">
                    <p>Bienvenido, estás logueado</p>
                    <p>{setLogin} </p>
                </div>
            ) : (
                <div className="login-prompt">
                    <p>Por favor, inicia sesión para poder postear</p>
                </div>
                )}
                </div>
    );
};*/
//PASOS PARA LLAMADA FECTH
//1- LLAMAR ALA DIRECCION DEL JSON
//2- COMPROBAR LLAMADA JSON 
//SOLICITAMSO DATOS

import React, { useEffect, useState } from "react";

export const Postpublic = () => {

const [publicado, setpublicado]=useState([]);
 useEffect(() => {
    // Carga el archivo JSON
    fetch('/post.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
      })
      .then((data) => setpublicado(data.posteados))
      .catch((error) => console.error('Error:', error));
  }, []);

  return(
    <div className="">
    
    { publicado.map((item)=>(
      
    <div key={item.id}> {item.name} 
    <p > {item.texto} </p>
    </div> 
    
  ))}
    </div>
);
 };



      /*
    useEffect (()=>{
    
      fetch('/post.json')
    .then((response)=>{
    if(!response.ok){
    throw new Error("Hubo un problema con el la soliciatud");
    }
    return response.json();
    })
    .then(( publicado ) => setpublicado(publicado));
    .catch((error) =>  console.error("error" , error)); 
    
    
    }, []);
    */