/*const express = require("express")

const app =express();

const PORT = 4000;

app.get("/app", (req, res )=>{
res.send("servidor funcionando")

});
app.listen(PORT, ()=>{
    console.log(`servidor corriendo:${PORT}`)
});*/
/*
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo! El servidor está funcionando.');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
*//*
const express = require ('express');
const path = require('path');  // Para gestionar rutas de archivos
const fs = require('fs');      // Para leer archivos del sistema de archivos

const app = express();
// Configura CORS 
app.use(cors({
  origin: 'http://localhost:3000',  // Permite solicitudes solo desde tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
  allowedHeaders: ['Content-Type']  // Cabeceras permitidas
}));

const PORT = 4000;

// Ruta para devolver el archivo post.json
app.get('/api/posteados', (req, res) => {
  const jsonFilePath = path.join(__dirname, 'blog', 'post.json');
  
  // Leer el archivo JSON
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
    } else {
      // Devolver el contenido del archivo JSON
      res.json(JSON.parse(data));  // Convertimos el texto en objeto JSON
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});*/
/*
const express = require('express');
const cors = require('cors');  // Importar el paquete cors

const app = express();

// Configura CORS
app.use(cors({
  origin: 'http://localhost:3000',  // Permite solicitudes solo desde tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
  allowedHeaders: ['Content-Type']  // Cabeceras permitidas
}));

// Rutas del servidor
app.get('/api/posteados', (req, res) => {
  // Asegúrate de que la ruta esté bien configurada y devuelva los datos correctos
  const data = {
    posteados: [
      { ID: 1, name: 'Los mejores consejos para empezar en el desarrollo web', texto: 'Contenido de la publicación' },
      { ID: 2, name: 'Otro título', texto: 'Otro contenido' },
      { ID: 3, name: 'Más consejos', texto: 'Más contenido aquí' }
    ]
  };
  res.json(data);  // Enviar la respuesta JSON
});

// Configura el puerto
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
*/