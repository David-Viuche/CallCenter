const { Usuario, Empleado } = require('../models/sequelize');

const controller = {}

controller.iniciarSesion = (req, res) => {
    const { correo, contraseña, tipo } = req.body;
    if (tipo == 'empleado') {
        Empleado.findOne({ where: { correo } })
            .then(result => {
                if (!result) {
                    res.statusCode = 404;
                    res.json({ error: 'correo incorrecto' });
                } else {
                    if (result.contraseña == contraseña) {
                        res.redirect(`/empleado/activar/${result.id}`)
                    } else {
                        res.statusCode = 404;
                        res.json({ error: 'contraseña incorrecta' });
                    }
                }
            })
    } else if (tipo == 'usuario') {
        Usuario.findOne({ where: { correo } })
            .then(result => {
                if (!result) {
                    res.statusCode = 404;
                    res.json({ error: 'correo incorrecto' });
                } else {
                    if (result.contraseña == contraseña) {
                        res.redirect(`/usuario/activar/${result.id}`)
                    } else {
                        res.statusCode = 404;
                        res.json({ error: 'contraseña incorrecta' });
                    }
                }
            })
    }
}

controller.registrarse = (req, res) => {
    const { correo, contraseña, nombre } = req.body;
   
    Usuario.create({ correo, contraseña, nombre })
        .then(result => {
            res.redirect(`/usuario/desactivar/${result.id}`)
        })
}

controller.verificar = (req, res) => {
    const id = req.params.id;
    Usuario.findOne({ where: { id } })
        .then(result => {
            if (result) {
                res.json({ sesion: result.sesion });
            } else {
                res.statusCode = 400;
                res.json({ error: 'bad request' });
            }
        })
}

module.exports = controller;