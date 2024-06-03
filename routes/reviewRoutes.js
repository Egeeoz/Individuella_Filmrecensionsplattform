const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/', reviewController.addReview);
router.get('/');
router.get('/:id');
router.put('/:id');
router.delete('/:id');

module.exports = router;
