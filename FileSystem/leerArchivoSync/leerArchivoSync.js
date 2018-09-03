var fs = require('fs');



var contenido = fs.readFileSync('archivos/config.json', 'UTF-8');

console.log(contenido);


var config = JSON.parse(contenido);

console.log("El nombre del JSON es: "+ config.nombre);