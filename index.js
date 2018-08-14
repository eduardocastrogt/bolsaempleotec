'use strict'

var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://bolsaempleo:Inicio123@ds119662.mlab.com:19662/bolsaempleo');

app.listen(port);

console.log('Backend is running in port ' + PORT);