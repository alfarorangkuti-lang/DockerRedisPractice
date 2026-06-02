const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'Token tidak ditemukan'
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET_KEY
        );

        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Token tidak valid'
        });
    }
};

module.exports = verifyToken;