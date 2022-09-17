// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// crear un usuario
// api/users
router.post('/', 
    [
        check('email', 'Add a valid email').isEmail(),
        check('password', 'The password must be at least 6 characters').isLength({ min: 6 })
    ],
    authController.authenticatedUser
);

module.exports = router;