const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.render('usuarios', { usuarios });
    } catch (err) {
        res.status(500).send('Error al obtener los usuarios');
    }
});

module.exports = router;


