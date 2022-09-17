const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUsers = async (req, res) => {
    // Revisar si hay errores
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'The user already exists' });
        }

        // create user
        user = new User(req.body);

        // hash password
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);

        // save user
        await user.save();

        // create and sign the jwt
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
        res.status(500).send('Hubo un error');
    }
}