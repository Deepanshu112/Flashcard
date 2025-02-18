import React, { useState } from "react";

const Flashcard = ({ card, onUpdate, onDelete }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-80">
      <h3 className="text-xl font-semibold">
        {showAnswer ? card.answer : card.question}
      </h3>
      <button
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      <div className="mt-3 flex justify-between">
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => onUpdate(card._id, true)}
        >
          Got it Right
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => onUpdate(card._id, false)}
        >
          Got it Wrong
        </button>
      </div>
      <button
        className="mt-3 bg-gray-500 text-white px-3 py-1 rounded"
        onClick={() => onDelete(card._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Flashcard;
