require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const User = require('./models/userModel');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Set EJS as the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection setup (removed deprecated options)
mongoose.connect(process.env.MONGO_CONN_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// User routes
app.use('/api', userRoutes);

// Route to render index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/request-list', (req, res) => {
  res.render('request-list');
});


app.get('/driverinfo', (req, res) => {
  res.render('driverinfo');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});