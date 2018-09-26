var express = require('express');
var http = require('http');
var app = express();
var fs = require('fs');

var user = {
    "user4": {
        "name": "guf",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

var id = 2;

app.get('/', function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('RestFull');
    res.end();
}); 

app.post('/addUser', function (req, res) {
    fs.readFile(__dirname + '/' + 'index.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.get('/listUser', function (req, res) {
    fs.readFile(__dirname + '/' + 'index.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/:id', function(req,res){
    fs.readFile(__dirname + '/' + 'index.json', 'utf8', function(err, data){
        var users = JSON.parse(data);
        var user = users['user'+ req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

app.delete('/deleteUser', function(req,res){
    fs.readFile(__dirname + '/' + 'index.json', 'utf8', function(err,data){
        data = JSON.parse(data);
        delete data['user' + id];

        console.log('Dato a eliminar: ' + JSON.stringify(data));
        res.write('User deleted successful: ')
        res.end(JSON.stringify(data));
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Corriendo por el puerto: " + port);
});