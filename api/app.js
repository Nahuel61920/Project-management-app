const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crando servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 3001;

// importar rutas
app.use('/usuarios', require('./routes/usuarios'));
app.use('/auth', require('./routes/auth'));
app.use('/proyectos', require('./routes/proyectos'));
app.use('/tareas', require('./routes/tareas'));


// arrancar servidor
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
