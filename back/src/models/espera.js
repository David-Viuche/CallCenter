'use strict';
module.exports = (sequelize, DataTypes) => {
  const Espera = sequelize.define('Espera', {
    llamada: DataTypes.INTEGER
  }, {});
  Espera.associate = function(models) {
    // associations can be defined here
  };
  return Espera;
};