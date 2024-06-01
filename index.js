const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB);
mongoose.connection.once('open', () => {
  app.listen(process.env.PORT, process.env.URL, () => {
    console.log(`Connected to http://${process.env.URL}:${process.env.PORT}`);
  });
});
