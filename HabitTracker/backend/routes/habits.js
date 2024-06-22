const express = require('express');
const router = express.Router();
const Habit = require('../models/habit');

// Add a new habit
router.post('/', async (req, res) => {
    const { userId, name } = req.body;
    const habit = new Habit({ userId, name });
    try {
        const savedHabit = await habit.save();
        res.status(201).json(savedHabit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get habits for a user
router.get('/:userId', async (req, res) => {
    try {
        const habits = await Habit.find({ userId: req.params.userId });
        res.json(habits);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Mark a habit as completed for today
router.patch('/:id/complete', async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        habit.completedDates.push(new Date());
        await habit.save();
        res.json(habit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
