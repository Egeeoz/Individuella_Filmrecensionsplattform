const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/user');
const Movie = require('./models/movie');
const Review = require('./models/review');
const app = express();

app.use(express.json());

// routes
//app.use("/user", route)

mongoose.connect(process.env.MONGODB);
mongoose.connection.once('open', () => {
  app.listen(process.env.PORT, process.env.URL, () => {
    console.log(`Connected to http://${process.env.URL}:${process.env.PORT}`);
  });
});
