var fs = require('fs');


fs.access('MKDIR', function (error) {
    if (error) {
        fs.mkdir('MKDIR', function (error) {
            if (error) {
                throw error;
            } else {
                console.log('Directorio creado exitosamente');
            }
        });
    } else {
        console.log('El directorio ya existe');
    }
});

