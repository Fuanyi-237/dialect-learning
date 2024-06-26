const express = require('express');
const Word = require('../models/Word');

const router = express.Router();

router.post('/', async (req, res) => {
  const { dialect, word, meaning, example, userId } = req.body;
  try {
    const newWord = new Word({ dialect, word, meaning, example, user: userId });
    await newWord.save();
    res.status(201).json(newWord);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.get('/', async (req, res) => {
  try {
    const words = await Word.find().populate('user', 'username');
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
