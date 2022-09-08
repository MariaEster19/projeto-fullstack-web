'use strict'

const Usuario = require('../modelos/usuarios');

function inicio(req,res) {
    res.status(200).send({
        nome:'Me chamo Maria Ester',
        idade: 'Tenho 18 aninhos!',
    });
};

function teste(req, res){
    res.status(200).send({
        message: 'Testing node server!'
    });
};

    module.exports = {
        inicio,
        teste
    }