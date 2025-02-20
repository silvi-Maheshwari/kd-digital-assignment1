const express = require('express');
const Lecture = require('../models/Lecture');
const router = express.Router();

router.get('/', async (req, res) => {
    const lectures = await Lecture.find().populate('course instructor');
    res.json(lectures);
});

module.exports = router;