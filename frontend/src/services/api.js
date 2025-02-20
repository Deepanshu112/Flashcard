import axios from "axios";

const API = axios.create({
  baseURL: process.env.BACKEND_URL,
});

export const getFlashcards = () => API.get("/flashcards");
export const addFlashcard = (data) => API.post("/flashcards", data);
export const updateFlashcard = async (id, isCorrect) => {
    console.log(`🔄 Sending API request: PUT /flashcards/${id}, isCorrect: ${isCorrect}`); // Debugging
  
    try {
      const response = await API.put(`/flashcards/${id}`, { isCorrect });
      console.log("✅ API Response:", response.data); // Debugging
      return response.data; // Ensure updated data is returned
    } catch (error) {
      console.error("❌ API Error:", error.response ? error.response.data : error.message);
      throw error;
    }
  };
export const deleteFlashcard = (id) => API.delete(`/flashcards/${id}`);