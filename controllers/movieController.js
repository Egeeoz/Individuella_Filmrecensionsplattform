const Movie = require('../models/movie');

const addMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).send(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(201).send(movies);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(201).send(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateMovieDetails = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllMovieReviews = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteMovie = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  getMovie,
  updateMovieDetails,
  getAllMovieReviews,
  deleteMovie,
};
