const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/', reviewController.addReview);
router.get('/', reviewController.getAllReviews);
router.get('/:id');
router.put('/:id');
router.delete('/:id');

module.exports = router;
