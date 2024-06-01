const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const adminCheck = require('../middlewares/adminMiddleware');

router.post('/', adminCheck, movieController.addMovie);
router.get('/');
router.get('/:id');
router.put('/:id');
router.get('/:id/reviews');
router.delete('/:id');

module.exports = router;
