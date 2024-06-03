const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const adminCheck = require('../middlewares/adminMiddleware');

router.post('/', adminCheck, movieController.addMovie);
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovie);
router.put('/:id', adminCheck, movieController.updateMovieDetails);
router.get('/:id/reviews', movieController.getAllMovieReviews);
router.delete('/:id', adminCheck, movieController.deleteMovie);

module.exports = router;
