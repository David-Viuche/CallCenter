module.exports = (sequelize, type) => {
    const Llamada = sequelize.define('Llamada', {
        emisor: {
            type: type.INTEGER
        },
        receptor: {
            type: type.INTEGER
        },
        estado: {
            type: type.STRING
        },
        duracion: {
            type: type.INTEGER
        },
        horaInicio: {
            type: type.DATE
        },
        horaFin: {
            type: type.DATE
        }
    }, {
        timestamps: true
    })
    return Llamada
}