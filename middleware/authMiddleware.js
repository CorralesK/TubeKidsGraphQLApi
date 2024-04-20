require('dotenv').config();
const jwt = require('jsonwebtoken');


const VerifyToken = (req) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Access denied');
        }
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            return { userId: decoded.id };
        } catch (error) {
            throw new Error('Invalid token');
        }
    } else {
        throw new Error('Unauthorized');
    }
}

module.exports = VerifyToken;