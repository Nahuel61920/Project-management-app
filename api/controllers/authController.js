const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authenticatedUser = async (req, res) => {
    // Revisar si hay errores
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // extract email and password
    const { email, password } = req.body;

    try {
        // check if the user is registered
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'The user does not exist' });
        }

        // check password
        const correctPassword = await bcryptjs.compare(password, user.password);
        if (!correctPassword) {
            return res.status(400).json({ msg: 'Incorrect password' });
        }

        // if everything is correct, create and sign the jwt
        const payload = {
            user: {
                id: user.id
            }
        };

        // sign the jwt
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600 // 1 hour
        }, (error, token) => {
            if (error) throw error;
            
            // confirmation message
            res.json({ token });
        });

    } catch (error) {
        console.log(error);
    }
}

exports.userAuthenticated = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'There was an error' });
    }
}
