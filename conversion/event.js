var events = require('events');
var EventEmitter = events.EventEmitter;

var ee = new EventEmitter();


ee.once("cansado", function(data){
    console.log("Jugador cansado por primera vez")
});

ee.on("cansado", function(data){
    console.log("Jugador cansado. el juagador es el numero " + data)
});

ee.on("herido", function(){
    console.log("Jugador esta herido");

});

ee.emit("cansado", "10"); 
ee.emit("cansado", "10"); 

ee.removeAllListeners("cansado");


ee.removeAllListeners();

ee.emit("cansado", "10"); 
ee.emit("herido"); 