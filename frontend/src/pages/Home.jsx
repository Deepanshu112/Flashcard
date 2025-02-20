import React, { useState, useEffect } from "react";
import FlashcardList from "../components/FlashcardList";
import { addFlashcard } from "../services/api";
import { BsSun, BsMoon } from "react-icons/bs"; // Light/Dark Mode Icons

const Home = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // Persist Theme
  });

  // Apply Theme Changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFlashcard({ question, answer });
    setQuestion("");
    setAnswer("");
    window.location.reload();
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-teal-100 to-blue-200 text-gray-800"}`}>
      
      {/* Dark Mode Toggle Button */}
      <button
        className="fixed top-5 right-5 p-3 rounded-full shadow-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition hover:scale-110"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
      </button>

      {/* Main Card */}
      <div className={`w-full max-w-lg p-6 rounded-2xl shadow-lg border backdrop-blur-md ${darkMode ? "bg-gray-800 border-gray-600" : "bg-white/50 border-white/30"}`}>
        <h1 className="text-3xl font-bold text-center">Leitner System Flashcards</h1>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Question"
            className="border-2 p-3 w-full rounded-xl bg-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Answer"
            className="border-2 p-3 w-full rounded-xl bg-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition">
            Add Flashcard
          </button>
        </form>
      </div>

      {/* Flashcard List with Dark Mode Prop */}
      <div className="mt-8 w-full max-w-3xl">
        <FlashcardList darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Home;
