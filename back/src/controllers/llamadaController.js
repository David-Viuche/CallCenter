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
            fetch(`http://localhost:4000/empleado/desactivar/${idEmpleado}`)
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

controller.terminar = (req, res) => {
    const idLlamada = req.params.idLlamada;
    Llamada.findOne({ where: { id: idLlamada } })
        .then(result => {
            result.update({
                estado: 'terminada',
                horaFin: Date.now(),
                duracion: Date.now() - result.horaInicio
            })
                .then(llamadaTerminada => {
                    fetch(`http://localhost:4000/empleado/activar/${llamadaTerminada.receptor}`)
                    
                    res.json({ estado: 'terminada', llamadaTerminada });
                })
        })
}

module.exports = controller;