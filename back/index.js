const express = require('express');

// Inicializaciones 

const app = express();

// Configuraciones 


app.set('port',process.env.PORT || 4000);


// Iniciar Servidor

app.listen(app.get('port'),()=>{
    console.log("Server iniciado en puerto ", app.get('port') );
});
