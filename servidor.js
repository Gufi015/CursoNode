var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write('Hola');
    return res.end();
}).listen(3000);

console.log('corriendo puerto 3000')


