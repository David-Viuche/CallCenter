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
                        res.json(result);
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
                        res.json(result);
                    } else {
                        res.statusCode = 404;
                        res.json({ error: 'contraseña incorrecta' });
                    }
                }
            })
    }
}

controller.registrarse = (req, res) => {
    const { correo, contraseña, tipo, nivelAcceso } = req.body;
    if (tipo == 'empleado') {
        if (correo && contraseña && nivelAcceso) {
            Empleado.create({ correo, contraseña, nivelAcceso })
                .then(result => {
                    res.json(result);
                })
        } else {
            res.statusCode = 400;
            res.json({ error: 'bad request' });
        }
    } else if (tipo == 'usuario') {
        Usuario.create({ correo, contraseña })
            .then(result => {
                res.json(result);
            })
    }
}

module.exports = controller;