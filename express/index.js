var express = require('express');

var app = express();


app.get('/', function(llamado, respuesta){
    console.log('Se hizo llamado GET');
    respuesta.send('Hola desde express');
});

app.listen(3000, function(){
    console.log('Aplicación corriendo en el puerto 3000');
})