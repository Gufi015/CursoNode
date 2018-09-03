var fs = require('fs');

/*var archivos = fs.readdirSync('archivos')
console.log(archivos);*/

fs.readdir('archivos', function(error, archivos){
    if(error){
        throw erro;

    } else {
        console.log(archivos);
    }
})

console.log('Archivos del directorio' );