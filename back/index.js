const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sesionRutes = require('./src/routes/sesion');
const empleadoRoutes = require('./src/routes/empleado');
const llamadaRoutes = require('./src/routes/llamada');
const usuarioRoutes = require('./src/routes/usuario');

// Inicializaciones 

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuraciones 

app.set('port',process.env.PORT || 4000);
app.use('/sesion',sesionRutes);
app.use('/empleado',empleadoRoutes);
app.use('/usuario',usuarioRoutes);
app.use('/llamada',llamadaRoutes);

// Iniciar Servidor

app.listen(app.get('port'),()=>{
    console.log("Server iniciado en puerto ", app.get('port') );
});
