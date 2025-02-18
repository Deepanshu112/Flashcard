import React, { useState } from "react";
import FlashcardList from "../components/FlashcardList";
import { addFlashcard } from "../services/api";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFlashcard({ question, answer });
    setQuestion("");
    setAnswer("");
    window.location.reload();
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center">Leitner System Flashcards</h1>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter Question"
          className="border p-2 w-80 mb-2"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Answer"
          className="border p-2 w-80 mb-2"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Flashcard
        </button>
      </form>
      <FlashcardList />
    </div>
  );
};

export default Home;