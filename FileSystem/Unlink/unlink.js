var fs = require('fs');


fs.unlink('test/test.txt', function (error) {
    if (error) {
        throw error;
    } else {
        console.log('El archivo fue eliminado');
    }
});