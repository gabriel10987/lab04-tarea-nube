const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// Ruta para obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.render('productos', { productos });
    } catch (err) {
        res.status(500).send('Error al obtener los productos');
    }
});

module.exports = router;

