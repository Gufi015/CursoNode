var fs = require('fs');



fs.readFile('archivos/demo.txt', 'UTF-8', function(error, contenido){
    if(error){
        throw error;
    } else{
        console.log('El contenido es :' + contenido);
    }
});