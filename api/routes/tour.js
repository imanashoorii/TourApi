const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tour')
const { authenticateJWT }  = require('../middlewares/auth')

// Controllers
const {
    createTour,
} = tourController

// Multer Middleware
const multer = require('../middlewares/multer')

router.post('/createtour',authenticateJWT, createTour)

module.exports = router;