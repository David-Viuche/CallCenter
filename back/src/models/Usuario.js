module.exports = (sequelize, type) => {
    const Usuario = sequelize.define('Usuario', {
        nombre: {
            type: type.STRING,
        },
        apellido: {
            type: type.STRING
        },
        nickName: {
            type: type.STRING
        },
        contraseña: {
            type: type.STRING
        },
        correo: {
            type: type.STRING
        }
    }, {
        timestamps: true
    })
    return Usuario
}