'use strict'

const { application } = require('express');
const  app = require("./app");
const port = 3800;
var mongoose = require('mongoose');

//conecxão com banco de dados
mongoose.Promisse = global.Promisse;
mongoose.connect('mongodb://localhost:27017/projeto-web-fullstack')
    .then(() => {
        console.log("conexão realizada com sucesso!");


        app.listen(port, ()=> {
            console.log("servidor em funcionamento: http://localhost:3800")
        })
    })
    .catch(err => console.log(err));
