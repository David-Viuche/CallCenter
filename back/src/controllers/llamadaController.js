const { Llamada, Espera } = require('../models/sequelize');
const fetch = require('node-fetch');
const controller = {}

controller.nueva = (req, res) => {
    const idUsuario = req.params.id;
    fetch('http://localhost:4000/empleado/operador')
        .then(result => {
            return result.json();
        })
        .then(operador => {
            if (!operador.error) {
                res.redirect(`/llamada/conectar/${idUsuario}/${operador.id}`);
            } else {
                res.redirect(`/llamada/espera/${idUsuario}`);
            }
        })
}

controller.conectar = (req, res) => {
    const idUsuario = req.params.idU;
    const idEmpleado = req.params.idE;
    Llamada.create({
        emisor: idUsuario,
        receptor: idEmpleado,
        estado: 'activa',
        horaInicio: Date.now()
    })
        .then(result => {
            res.json(result);
        })
}

controller.espera = (req, res) => {
    const idUsuario = req.params.idU;
    Llamada.create({
        emisor: idUsuario,
        receptor: -1,
        estado: 'espera'
    })
        .then(result => {
            Espera.create({
                llamada: result.id
            })
                .then(llamadaEspera => {
                    res.json({ estado: 'espera', llamadaEspera });
                })
        })
}

module.exports = controller;