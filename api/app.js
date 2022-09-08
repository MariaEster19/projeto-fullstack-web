'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Carregar Rotas
const index_rotas = require('./rotas/index');
const usuario_rotas = require('./rotas/usuario');


// Cors

// Rotas
app.use(index_rotas);
app.use(usuario_rotas);

// Exportações
module.exports = app; 
