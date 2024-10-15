const express = require('express');
const app = express();
const routes = require('./routes');

// Set the port to the environment variable PORT or default to 5000
const PORT = process.env.PORT || 5000;

// Load routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

