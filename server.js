const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const jobRoutes = require('./routes/jobs');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors()); // allow cross-origin requests (important for frontend)
app.use(express.json()); // parse incoming JSON data

// Routes
app.use('/api/jobs', jobRoutes);

// ✅ FIXED: Use Render's dynamic PORT
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err.message);
  });
