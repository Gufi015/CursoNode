var fs = require('fs');

fs.rename('test', 'testDemo', function(error){
    if(error){
        throw error;
    } else{
        console.log('el directorio fue  Renombrado correctamente');
    }
});