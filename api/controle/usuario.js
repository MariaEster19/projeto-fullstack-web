'use strict'

var Usuario = require('../modelos/usuarios');

function inicio(req,res) {
    res.status(200).send({
        message:'Hello world!'
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