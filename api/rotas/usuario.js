'use strict'

var express = require('express');
var UsuarioControle = require('../controle/usuario');

var router = express.Router();

router.get('/usuario', UsuarioControle.inicio);
router.get('/usuario/teste', UsuarioControle.teste);

module.exports = router;