import React, { useState, useEffect } from "react";
import "../styles-secundarios/postpublic.css";  // Asegúrate de que el archivo CSS esté importado.

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
                </div>
            ) : (
                <div className="login-prompt">
                    <p>Por favor, inicia sesión para continuar</p>
                </div>
            )}
        </div>
    );
};
