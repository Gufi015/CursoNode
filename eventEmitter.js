var EventEmitter = require('events').EventEmitter;
var util = require('util');


var reloj = function () {
    var self = this;
    setInterval(function () {
        self.emit('tick-tock');
    }, 1000)
}


util.inherits(reloj, EventEmitter);


module.exports = reloj;