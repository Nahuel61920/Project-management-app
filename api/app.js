const express = require('express');
const conectarDB = require('./config/db');

// Crando servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 3001;

// importar rutas
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));


// arrancar servidor
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
