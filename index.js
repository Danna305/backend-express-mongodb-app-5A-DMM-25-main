const express = require('express');
const mongoose = require('mongoose');
// Importando librería CORS
const cors = require('cors');

// importando rutas de usuario
const articuloRoute = require('./routes/articulo.route');
const personaRoute = require('./routes/persona.route');
const ubicacionRoute = require('./routes/ubicacion.route');
const asignacionRoute = require('./routes/asignacion.route');
const inventarioRoute = require('./routes/inventario.route');


const app = express();
// Agregando el parser JSON de express
app.use(express.json());
// Agregando el middleware de CORS para consumo de APIs en el mismo origen
app.use(cors());

// Ruta por defecto
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de APIs version 1.0.0');
})

// Tareas CRUD y sus métodos
// C - Create -> post
// R - Recuperación -> get
// U - update -> put
// D - delete -> delete

// Endpoints para colección de usuarios
app.use('/api/articulo',articuloRoute);
app.use('/api/persona',personaRoute);
app.use('/api/ubicacion',ubicacionRoute);
app.use('/api/asignacion',asignacionRoute);
app.use('/api/inventario',inventarioRoute);

// Realizar petición de conexión a mongodb
mongoose.connect('mongodb+srv://2311080447:Zb0EqlCi0XlJKKGc@cluster0.8biby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/myDataBase')
.then( () => {
    console.log('Se estableció la conexión a base de datos exitosamente');
    app.listen( 3000, () => {
        console.log('Servidor trabajando en el puerto 3000');
    });
})
.catch( () => console.log('Ocurrió un error en la conexión a la base de datos') );