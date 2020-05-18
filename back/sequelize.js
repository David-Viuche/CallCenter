const Sequelize = require('sequelize');

const EmpleadoModel = require('./src/models/Empleado');
const UsuarioModel = require('./src/models/Usuario');
const LlamadaModel = require('./src/models/Llamada');

const sequelize = new Sequelize({ 
    database:'callcenter', 
    username:'root', 
    password:'', 
    dialect: 'mysql',
    host: 'localhost',
    port:'3306' 
});

const Empleado = EmpleadoModel(sequelize,Sequelize);
const Usuario = UsuarioModel(sequelize,Sequelize);
const Llamada = LlamadaModel(sequelize,Sequelize);

sequelize.sync()
.then(()=>{
    console.log('Base de datos creada');
})

module.exports = {
    Empleado,
    Usuario,
    Llamada
}