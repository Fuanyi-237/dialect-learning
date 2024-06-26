const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  dialect: { type: String, required: true },
  word: { type: String, required: true },
  meaning: { type: String, required: true },
  example: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Word', wordSchema);
