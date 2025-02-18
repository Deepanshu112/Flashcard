const express = require("express");
const Flashcard = require("../models/Flashcard");
const router = express.Router();

// 📌 Add Flashcard
router.post("/", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFlashcard = new Flashcard({ question, answer });
    await newFlashcard.save();
    res.status(201).json(newFlashcard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Get All Flashcards
router.get("/", async (req, res) => {
  try {
    const flashcards = await Flashcard.find().sort({ nextReview: 1 });
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Update Flashcard (Move to next box)
router.put("/:id", async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard) return res.status(404).json({ message: "Flashcard not found" });

    const isCorrect = req.body.isCorrect;
    if (isCorrect) {
      flashcard.box = Math.min(flashcard.box + 1, 5); // Max box is 5
      flashcard.nextReview = new Date(Date.now() + flashcard.box * 2 * 24 * 60 * 60 * 1000);
    } else {
      flashcard.box = 1;
      flashcard.nextReview = new Date(Date.now());
    }

    await flashcard.save();
    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Delete Flashcard
router.delete("/:id", async (req, res) => {
  try {
    await Flashcard.findByIdAndDelete(req.params.id);
    res.json({ message: "Flashcard deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
