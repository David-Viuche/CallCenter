const express = require('express');
const bodyParser = require('body-parser');
const sesionRutes = require('./src/routes/sesion');
const empleadoRoutes = require('./src/routes/empleado');

// Inicializaciones 

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuraciones 

app.set('port',process.env.PORT || 4000);
app.use('/sesion',sesionRutes);
app.use('/empleado',empleadoRoutes);

// Iniciar Servidor

app.listen(app.get('port'),()=>{
    console.log("Server iniciado en puerto ", app.get('port') );
});
