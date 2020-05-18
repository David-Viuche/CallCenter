'use strict';
module.exports = (sequelize, DataTypes) => {
  const Llamada = sequelize.define('Llamada', {
    emisor: DataTypes.INTEGER,
    receptor: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    duracion: DataTypes.INTEGER,
    horaInicio: DataTypes.DATE,
    horaFin: DataTypes.DATE
  }, {});
  Llamada.associate = function(models) {
    // associations can be defined here
  };
  return Llamada;
};