const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const User = require('./models/user');
const Movie = require('./models/movie');
const Review = require('./models/review');
const app = express();

const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

mongoose.connect(process.env.MONGODB);
mongoose.connection.once('open', () => {
  app.listen(process.env.PORT, process.env.URL, () => {
    console.log(`Connected to http://${process.env.URL}:${process.env.PORT}`);
  });
});
