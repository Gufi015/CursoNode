var fs = require('fs');

var total = " ";

var stream = fs.createReadStream('archivos/demo.txt');


stream.on('data', function(segmento){
    console.log(segmento.length);

    total += segmento;

    stream.pause();
    stream.resume();
});

stream.on('end', function(){
    console.log('el tamaño total del archivo es: ' + total.length);
});