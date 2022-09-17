// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

// crear un usuario
// api/users
router.post('/', 
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Add a valid email').isEmail(),
        check('password', 'The password must be at least 6 characters').isLength({ min: 6 })
    ],
    userController.createUsers
);

module.exports = router;