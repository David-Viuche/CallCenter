const { Empleado } = require('../models/sequelize');
const controller = {}

controller.activar = (req, res) => {
    const id = req.params.id;
    Empleado.findOne({ where: { id } })
        .then(result => {
            result.update({ disponibilidad: true })
                .then(act => {
                    res.json(act);
                })
        })
}

controller.desactivar = (req, res) => {
    const id = req.params.id;
    Empleado.findOne({ where: { id } })
        .then(result => {
            result.update({ disponibilidad: false })
                .then(act => {
                    res.json(act);
                })
        })
}

controller.operadorDisponible = (req, res) => {
    Empleado.findOne({ where: { disponibilidad: true } })
        .then(result => {
            if (result) {
                res.json(result);
            } else {
                res.statusCode = 404;
                res.json({ error: 'ningun operador disponible' });
            }
        })
}

module.exports = controller;