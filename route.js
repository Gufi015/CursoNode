var express = require('express');
var http = require('http');
var router = express.Router();
var dns = require('dns');


dns.lookup('iana.org', (err, adress, family) => {
    console.log('IP Adress: %j Family: IPv%s', adress, family);
});
