const encriptar = require('crypto');


const secret ='abcdefg05';
const hash = encriptar.createHmac('sha256',secret).update('I love').digest('hex');

console.log(hash);