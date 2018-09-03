var fs = require('fs');


var texto = 'Aprendiendo Node.js';


fs.writeFile('archivo', texto, function(error){
    if(error){
        throw error;
    } else {
        console.log('El archivo fue creado')
    }
});


var nuevoTexto = "\nGuff";
fs.appendFile('archivo', nuevoTexto, function(error){
    if(error){
        throw error;
    }else {
        console.log('Se agrego nuevo texto al archivo');
    }
});