import express from 'express';
import User from '../models/User.js'
import { authenticateToken, generateToken } from '../helpers/jwt.js';
import bcrypt from 'bcrypt'

const router = express.Router()

// CREATE
router.post('/create', async (req, res) => {
    if (!req.body.username || !req.body.password || req.body.password.length < 6) {
        return res.status(400).json({ error: "Invalid username or password" })
    }
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({ ...req.body, password: hashedPassword })
        const token = generateToken({ id: user.id, username: user.username })
        res.status(201).json({ user, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ where: { username } })

        if (!user) return res.status(404).json({ error: 'Username not found' })

        const valid = await bcrypt.compare(password, user.password)
        if (!valid) return res.status(403).json({ error: 'Incorrect password' })

        const token = generateToken({ username: user.username })
        res.status(201).json({ user, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

//READ ONE
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// UPDATE
router.patch('/:id', authenticateToken, async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).json({ error: 'User not found' });
        if (req.user.id !== user.id) {
            return res.status(403).json({ error: 'Forbidden: cannot modify other users' });
        }
        await user.update(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// DESTROY
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        await User.destroy({ where: { id: req.params.id } })
        res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

export default router
