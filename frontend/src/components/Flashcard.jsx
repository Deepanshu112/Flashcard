import React, { useState } from "react";
import { motion } from "framer-motion";

const Flashcard = ({ card, onUpdate, onDelete, darkMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-80 h-64 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full rounded-xl shadow-lg transition-transform duration-500 transform"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side (Question) */}
        <div
          className={`absolute w-full h-full p-6 rounded-xl flex flex-col justify-between items-center shadow-md transition ${darkMode ? "bg-gray-800 text-white" : "bg-gradient-to-br from-teal-200 to-green-300 text-gray-900"}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-lg font-semibold text-center">{card.question}</h3>
          <div className="flex flex-col gap-2">
            <button
              className="px-4 py-2 bg-white text-green-700 rounded-lg shadow-md hover:bg-green-100 transition"
              onClick={(e) => e.stopPropagation()}
            >
              Show Answer
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg shadow-md hover:bg-gray-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(card._id);
              }}
            >
              Delete
            </button>
          </div>
        </div>

        {/* Back Side (Answer & Controls) */}
        <div
          className={`absolute w-full h-full p-6 rounded-xl flex flex-col justify-between items-center shadow-md transition ${darkMode ? "bg-gray-700 text-white" : "bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900"}`}
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <h3 className="text-lg font-semibold text-center">{card.answer}</h3>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <button
                className="bg-green-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-500 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdate(card._id, true);
                }}
              >
                Got it Right
              </button>
              <button
                className="bg-red-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-500 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdate(card._id, false);
                }}
              >
                Got it Wrong
              </button>
            </div>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg shadow-md hover:bg-gray-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(card._id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Flashcard;
