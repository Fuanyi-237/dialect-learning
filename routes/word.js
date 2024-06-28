const express = require('express');
const Word = require('../models/Word');

const router = express.Router();

// POST /api/words - Add a new word
router.post('/', async (req, res) => {
  const { word, definition, example } = req.body;
  console.log('Add word request received:', req.body);
  if (!word || !definition || !example) {
    console.log('Validation error: Please fill in all fields');
    return res.status(400).json({ message: 'Please fill in all fields' });
  }
  try {
    const newWord = new Word({ word, definition, example });
    await newWord.save();
    res.status(201).json({ message: 'Word added successfully', word: newWord });
  } catch (error) {
    console.error('Error adding word:', error);
    res.status(500).json({ message: 'Failed to add word', error });
  }
});

// GET /api/words - Fetch all words
router.get('/', async (req, res) => {
  try {
    const words = await Word.find();
    res.status(200).json(words);
  } catch (error) {
    console.error('Error fetching words:', error);
    res.status(500).json({ message: 'Failed to fetch words', error });
  }
});

module.exports = router;
