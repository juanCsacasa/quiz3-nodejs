// Instrucciones:
// 1-Crea un servidor HTTP utilizando Node.js que responda a diferentes rutas con diferentes mensajes.
// 2-El servidor debe responder a las siguientes rutas:
// --Ruta raíz ("/"):"¡Bienvenido al servidor HTTP!"
// --Ruta "/about": "Esta es la página de acerca de nosotros."
// --Ruta "/contact": "Ponte en contacto con nosotros en contact@example.com"
// --Cualquier otra ruta: "Página no encontrada"
// Escucha en el puerto 3000.
// Cuando un cliente acceda a una ruta no especificada, el servidor debe responder con un código de estado 404 (Not Found).

const http = require("http");
const fs = require("fs");
const port = 8000;

const server = http.createServer((req, res) => {
  const url = req.url;

  // Manejar las diferentes rutas
  if (url === "/") {
    res.writeHead(200);
    res.end("¡Bienvenido al servidor HTTP!");
  } 
  if (url === "/about") {
    res.writeHead(200);
    res.end("Esta es la página de acerca de nosotros.");
  }
  if (url === "/contact") {
    res.writeHead(200);
    res.end("Ponte en contacto con nosotros en contact@example.com");
  } else {
    res.writeHead(404);
    res.end("Página no encontrada");
  }
});

server.listen(port, () =>{
  console.log(console.log(`Servidor escuchando en el puerto ${PORT}`));
})
