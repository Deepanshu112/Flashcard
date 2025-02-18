const mongoose = require("mongoose");

const FlashcardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  box: { type: Number, default: 1 }, // Leitner System ka box level
  nextReview: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Flashcard", FlashcardSchema);
