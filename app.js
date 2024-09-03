const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 9000;

// Middleware
app.use(express.json());

app.set('view engine', 'ejs');

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

// Importar rutas
const usuariosRouter = require('./routes/usuarios');
const productosRouter = require('./routes/productos');

// Usar las rutas
app.use('/usuarios', usuariosRouter);
app.use('/productos', productosRouter);

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

