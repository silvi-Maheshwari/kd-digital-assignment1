const express = require('express');

const Course = require('../models/Course');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single course by ID
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json(course);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new course (Only Admins)
router.post('/', async (req, res) => {
    // if (req.user.role !== 'admin') {
    //     return res.status(403).json({ message: 'Access denied' });
    // }

    try {
        const { name, level, description, image } = req.body;
        const newCourse = new Course({ name, level, description, image });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a course (Only Admins)
router.put('/:id', authenticate, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }

    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
        res.json(updatedCourse);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a course (Only Admins)
router.delete('/:id', async (req, res) => {
    // if (req.user.role !== 'admin') {
    //     return res.status(403).json({ message: 'Access denied' });
    // }

    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });
        res.json({ message: 'Course deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
