const express = require('express');
const path = require('path');
const connectDB = require("./detabase");
const cors = require('cors');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;  // Use environment variable if available
const quizRoute = require('./Router/quizRoute');

// Middleware
app.use(cors({ origin: "*", credentials: true })); // Enable Cross-Origin Resource Sharing
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files from the 'public' folder
app.use(express.json());  // Parse JSON payloads
connectDB()
// Import routes

// Set up routes with '/api' prefix
app.use('/api', quizRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
