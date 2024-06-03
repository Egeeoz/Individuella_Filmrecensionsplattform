const Review = require('../models/review');

const addReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(201).send(reviews);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getReviewById = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateReview = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteReview = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  addReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
