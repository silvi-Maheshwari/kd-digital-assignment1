const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    const instructors = await User.find({ role: 'instructor' });
    res.json(instructors);
});

module.exports = router;

