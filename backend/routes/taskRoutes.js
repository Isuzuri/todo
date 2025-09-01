import express from 'express';
import Task from '../models/Task.js';
import { authenticateToken } from '../helpers/jwt.js';
import User from '../models/User.js';

const router = express.Router()

// CREATE
router.post('/create', authenticateToken, async (req, res) => {
    const { title } = req.body
    const userId = req.user.id
    if (!title) {
        return res.status(400).json({ error: 'Title is required' })
    }
    try {
        const task = await Task.create({
            title,
            isComplete: false,
            userId
        })
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
})

// GET ALL USERS TASK
router.get('/', authenticateToken, async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id)
        const userTasks = await user.getTasks()
        res.status(200).json(userTasks)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' })
    }
})

// GET SINGLE TASK
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id,
                userId: req.user.id
            }
        })
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ error: 'Task not found' })
    }
})

// UPDATE
router.patch('/:id', authenticateToken, async (req, res) => {
    const { title, isComplete } = req.body
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id,
                userId: req.user.id
            }
        })
        if (!task) return res.status(404).json({ error: 'Task not found' });
        await task.update({ title, isComplete })
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// DELETE
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const deletedCount = await Task.destroy({ where: { id: req.params.id, userId: req.user.id } })
        if (deletedCount === 0) {
            return res.status(404).json({ error: 'Task not found or already deleted' });
        }
        res.status(200).json({ message: 'Task deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

export default router