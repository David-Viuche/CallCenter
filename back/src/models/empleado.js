'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empleado = sequelize.define('Empleado', {
    nombre: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    correo: DataTypes.STRING,
    disponibilidad: DataTypes.BOOLEAN,
    nivelAcceso:DataTypes.INTEGER
  }, {});
  Empleado.associate = function(models) {
    // associations can be defined here
  };
  return Empleado;
};