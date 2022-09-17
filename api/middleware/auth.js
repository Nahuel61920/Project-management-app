const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // read token header
    const token = req.header('x-auth-token');

    // check if there is no token
    if (!token) {
        return res.status(401).json({ msg: 'There is no token, authorization denied' });
    }

    // validate token
    try {
        const encryption = jwt.verify(token, process.env.SECRET);
        req.user = encryption.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}