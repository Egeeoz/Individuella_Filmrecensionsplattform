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
    const review = await Review.findById(req.params.id);
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateReview = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedupdates = ['rating', 'comment'];
  const isValidKeys = updates.every((updates) =>
    allowedupdates.includes(updates)
  );
  if (!isValidKeys) {
    res.status(400).send('Invalid update fields');
    return;
  }

  try {
    const review = await Review.findById(req.params.id);
    updates.forEach((update) => (review[update] = req.body[update]));
    await review.save();
    res.status(200).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).send('Review deleted');
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
