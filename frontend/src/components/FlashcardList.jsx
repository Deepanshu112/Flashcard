import React, { useEffect, useState } from "react";
import { getFlashcards, updateFlashcard, deleteFlashcard } from "../services/api";
import Flashcard from "./Flashcard";

const FlashcardList = ({ darkMode }) => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    const { data } = await getFlashcards();
    setFlashcards(data);
  };

  const handleUpdate = async (id, isCorrect) => {
    await updateFlashcard(id, isCorrect);
    fetchFlashcards();
  };

  const handleDelete = async (id) => {
    await deleteFlashcard(id);
    fetchFlashcards();
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {flashcards.length > 0 ? (
        flashcards.map((card) => (
          <Flashcard
            key={card._id}
            card={card}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            darkMode={darkMode}
          />
        ))
      ) : (
        <p>No flashcards available.</p>
      )}
    </div>
  );
};

export default FlashcardList;
