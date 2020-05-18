const { Empleado } = require('../models/sequelize');
const controller = {}

controller.activar = (req, res) => {
    const id = req.params.id;
    Empleado.findOne({ where: { id } })
        .then(result => {
            result.update({ disponibilidad: true })
            .then(act =>{
                res.json(act);
            })
        })
}

controller.desactivar = (req, res) => {
    const id = req.params.id;
    Empleado.findOne({ where: { id } })
        .then(result => {
            result.update({ disponibilidad: false })
            .then(act =>{
                res.json(act);
            })
        })
}

module.exports = controller;