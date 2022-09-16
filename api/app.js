const express = require('express');

// Crando servidor
const app = express();

const PORT = process.env.PORT || 3001;


// arrancar servidor
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
