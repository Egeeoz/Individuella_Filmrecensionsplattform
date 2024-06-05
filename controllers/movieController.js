const Movie = require('../models/movie');
const Review = require('../models/review');

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
  const updates = Object.keys(req.body);
  const allowedupdates = ['title', 'director', 'releaseYear', 'genre'];
  const isValidKeys = updates.every((updates) =>
    allowedupdates.includes(updates)
  );

  if (!isValidKeys) {
    res.status(400).send('Invalid update fields');
    return;
  }

  try {
    const movie = await Movie.findById(req.params.id);
    updates.forEach((update) => (movie[update] = req.body[update]));
    await movie.save();
    res.status(200).send(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllMovieReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ movieId: req.params.id }).populate(
      'userId',
      'username'
    );
    res.status(200).send(reviews);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).send('Movie deleted');
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
