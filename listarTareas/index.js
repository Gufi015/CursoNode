var express = require('express');
var bodyParser = require('body-parser');
var session = require('cookie-session');

var app = express();

app.use(session({ secret: 'nodejs' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


app.get('/', function (llamado, respuesta) {
    respuesta.render('formulario.ejs', {});
});

app.listen(3000, function () {
    console.log('Corriendo en el puerto 3000');
});
