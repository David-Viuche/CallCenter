const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sesionRutes = require('./src/routes/sesion');
const empleadoRoutes = require('./src/routes/empleado');
const llamadaRoutes = require('./src/routes/llamada');
const usuarioRoutes = require('./src/routes/usuario');

// Inicializaciones 

const app = express();
var whitelist = ['http://localhost:8080']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));
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
