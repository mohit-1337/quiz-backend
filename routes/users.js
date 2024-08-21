const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Example route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add other user-related routes here (e.g., create, update, delete)

module.exports = router;
