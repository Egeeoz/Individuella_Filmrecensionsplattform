const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.post('/', movieController.addMovie);
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovie);
router.put('/:id', movieController.updateMovieDetails);
router.get('/:id/reviews', movieController.getAllMovieReviews);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
