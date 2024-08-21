const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Example route to get all users
router.get('/', async (req, res) => {
  try {
    const quizs = await Quiz.find();
    res.json(quizs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add other user-related routes here (e.g., create, update, delete)

module.exports = router;
