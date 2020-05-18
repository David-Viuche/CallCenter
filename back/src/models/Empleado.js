module.exports = (sequelize, type) => {
    const Empleado = sequelize.define('Empleado', {
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
        },
        disponibilidad: {
            type: type.BOOLEAN
        },
        nivelAcceso: {
            type: type.INTEGER
        }
    }, {
        timestamps: true
    })
    return Empleado
}