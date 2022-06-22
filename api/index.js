'use strict'

var mongoose = require('mongoose');

//conecxão com banco de dados
mongoose.Promisse = global.Promisse;
mongoose.connect('mongobd://localhost:27017/projeto-web-fullstack',
    { useMongoClient: true })
    .then(() => {
        console.log("conexão realizada com sucesso!");
    })
    .catch(err => console.log(err));
