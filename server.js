const express = require('express');
const cors = require('cors');
const app = express();

// Enabling CORS for all routes
app.use(cors());

// Serve static files located in the "public" folder using Express
app.use(express.static('docs'));

// Middleware to handle 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/docs/404.html');
});

// Initialize server
// Check: http://localhost:3000/
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});