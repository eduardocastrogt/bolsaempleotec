'use strict'

var express = require('express');
var bodyParse = require('body-parser');

var app = express();

/*
Las rutas se colocan acá
*/

app.use(bodyParser.urlencoded({ extended: false }));
//Estableciendo el limite de subida en 50mb
app.use(bodyParse.json({ limit: '50mb' }));
app.use(bodyParser.json());

//Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

/*
Ruta para las apis
*/

module.exports = app;