'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    nickname: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    correo: DataTypes.STRING,
    sesion: DataTypes.BOOLEAN
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};