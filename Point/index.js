var http = require('http');



http.createServer(function(require, request){
    request.writeHead(200, {'content-type':'text/html'});
    request.write('Hola mundo!');
    request.end();
}).listen(3000);

console.log('Corriendo puerto 3000');