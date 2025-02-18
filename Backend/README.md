# Flashcard Backend

This is the backend for the Flashcard application. It is built using Node.js, Express, and MongoDB.

## Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/flashcard-backend.git
   cd flashcard-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB URI:

   ```properties
   MONGO_URI=mongodb://0.0.0.0/flash-card
   ```

### Running the Server

To start the server in development mode with hot-reloading:

```bash
npm run dev
```

To start the server in production mode:

```bash
npm start
```

The server will run on `http://localhost:5000` by default.

### API Endpoints

- `POST /api/flashcards` - Add a new flashcard
- `GET /api/flashcards` - Get all flashcards
- `PUT /api/flashcards/:id` - Update a flashcard (move to the next box)
- `DELETE /api/flashcards/:id` - Delete a flashcard

### Project Structure

```
Backend/
├── models/
│   └── flashcard.js
├── routes/
│   └── flashcards.js
├── .env
├── package.json
├── package-lock.json
└── server.js
```

### License

This project is licensed under the MIT License.
