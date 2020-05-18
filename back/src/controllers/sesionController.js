const { Usuario, Empleado, Llamada } = require('../../sequelize');

const controller = {}

controller.iniciarSesion = (req, res) => {
    const { correo, contraseña, tipo } = req.body;
    if(tipo == 'empleado'){
        res.send('empleado');
    }else if(tipo == 'usuario'){
        
    }
}

controller.registrarse = (req, res)=>{
    const { correo, contraseña, tipo } = req.body;
    if(tipo == 'empleado'){
        Empleado.create({correo,contraseña})
        .then(result=>{
            res.json(result);
        })
    }else if(tipo == 'usuario'){
        Usuario.create({correo,contraseña})
        .then(result=>{
            res.json(result);
        })
    }
}

module.exports = controller;