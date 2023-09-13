const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db'); // Import the database configuration

const gstinRoutes = require('./routes/gstin');
const panRoutes = require('./routes/pan');
const trackRoutes = require('./routes/track');

// Middleware
app.use(bodyParser.json());

// Use the database connection
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.message);
  } else {
    console.log('Connected to the database');
  }
});

// Include API routes
app.use('/gstin', gstinRoutes);
app.use('/pan', panRoutes);
app.use('/track', trackRoutes);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
