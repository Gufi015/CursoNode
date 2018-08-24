/*console.log(process.argv);

function leerOpcion(opcion) {
    var index = process.argv.indexOf(opcion);
    if (index === -1) {
        return false
    } else {
        return process.argv[index + 1];
    }
}

var nombre = leerOpcion("-nombre");

console.log("El nombre es: " + nombre);

process.stdout.write('cual es el apellido \n');

process.stdin.on('data', function(data){
    process.stdout.write(`El nombre completo es ${nombre} y el apellido es ${data} \n`);
    process.exit();
}); */


process.stdout.write('Escribre un listado de numeros "." Y PUNTO PARA terminar \n');

var suma = 0;

process.stdin.on('data', function (data) {
    if (data.toString().trim() == '.') {
        process.exit();
    }else {
        suma += parseInt(data.toString().trim());
    }
});


process.on('exit', function(){
    process.stdout.write('la suma total es: ' + suma + '\n');
});