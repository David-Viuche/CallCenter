const { Usuario } = require('../models/sequelize');
const controller = {}

controller.activar = (req, res) => {
    const id = req.params.id;
    Usuario.findOne({ where: { id } })
        .then(result => {
            result.update({ sesion: true })
                .then(act => {
                    res.json(act);
                })
        })
}

controller.desactivar = (req, res) => {
    const id = req.params.id;
    Usuario.findOne({ where: { id } })
        .then(result => {
            result.update({ sesion: false })
                .then(act => {
                    res.json(act);
                })
        })
}


module.exports = controller;