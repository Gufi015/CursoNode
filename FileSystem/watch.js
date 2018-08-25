var fs = require('fs');


var config = JSON.parse(fs.readFileSync("archivos/config.json", "UTF-8"));
console.log(config);

fs.watchFile("archivos/config.json", function(actual,anterior){
    console.log("Archivo Cambió");
    var config = JSON.parse(fs.readFileSync("archivos/config.json", "UTF-8"));
    console.log(config);
}); 
