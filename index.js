require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

//express
const app = express();

//admitir
app.use(express.json())

//configuración
app.set('port', port);

//rutas
app.use('/api', require('./config/routes'));

//iniciar express
app.listen(app.get('port'), (error) => {
    if(error) {
        console.log('error al iniciar servidor ' + error);
    } else {
        console.log('servidor iniciando en el puerto ' + port);
    }
});

