import jwt from 'jsonwebtoken';

import '../dotenv.js'

export function generateToken(payload) {
    return jwt.sign(payload, process.env.SECRET_TOKEN, { expiresIn: '3600s' })
}

export function authenticateToken(req, res, next) {
    const token = req.cookies.token;
    if (token == null) return res.status(401).json({ error: 'Token missing' })
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
        console.log(err)
        if (err) return res.status(403).json({ error: 'Invalid token' })
        req.user = user
        next()
    })
}