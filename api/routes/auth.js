// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

const auth = require('../middleware/auth');

// crear un usuario
// api/users
router.post('/', 
    authController.authenticatedUser
);

router.get('/',
    auth,
    authController.userAuthenticated,
);

module.exports = router;