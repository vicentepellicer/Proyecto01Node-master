//Carga de módulos
const http = require('http');
const fs = require('fs');
const router = require('./router/router.js');

//Configuraciones del servidor
const serverConfigFile = fs.readFileSync(`${__dirname}/config/env.json`,'utf-8');
const serverConfig = JSON.parse(serverConfigFile);
const hostname = serverConfig['hostname'];
const port = serverConfig['port'];

//Crear servidor
const server = http.createServer((req, res) => {
    router.init(req,res);
});

//Lanzar servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});