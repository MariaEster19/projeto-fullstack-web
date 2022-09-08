'use strict'


var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var UsuarioEsquema = Esquema({
    nome: String,
    sobrenome: String,
    apelido: String,
    email: String,
    senha: String,
    funcao: String,
    imagem: String

});

module.exports = mongoose.model('Usuario', UsuarioEsquema);