var https = require('https');
var fs = require('fs');

/*
const options = {
    key: fs.readFileSync('agent-key1.pem'),
    cert: fs.readFileSync('agent-key2.pem')
};
*/

https.createServer( (req, res) => {
    res.writeHead(200);
    res.write('Hola')
    res.end('HTTPS SAY HELLO\n')
}).listen(3000);
console.log('corriendo puerto 3000');