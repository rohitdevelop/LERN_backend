const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;  // Use environment variable if available

// Middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files from the 'public' folder
app.use(express.json());  // Parse JSON payloads

// Import routes
const quizRoute = require('./Router/quizRoute');

// Set up routes with '/api' prefix
app.use('/api', quizRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
