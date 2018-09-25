const encrip = require('crypto'), algorithm = 'aes-256-ctr', password = 'abcdefg0123456';

function encrypt(text) {
    var encri = encrip.createCipher(algorithm, password);
    var crypted = encri.update(text, 'utf8', 'hex')
    crypted += encri.final('hex');

    return crypted;
}

function decrypt(text) {
    var dencri = encrip.createDecipher(algorithm, password)
    var dec = dencri.update(text, 'hex', 'utf8')

    dec += dencri.final('utf8');

    return dec;
}

var hw = encrypt('Puto Migue');
console.log('aqui esta encriptando el texto: '+ hw);
console.log('-----------------')
console.log('Aqui lo esta desencriptando: '+decrypt(hw));