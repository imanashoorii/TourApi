const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tour')
const { authenticateJWT }  = require('../middlewares/auth')

// Controllers
const {
    createTour,
    tourList,
} = tourController

// Multer Middleware
const multer = require('../middlewares/multer')

// Admin Permission Middleware

const { hasAdminPermission } = require('../middlewares/admin')

router.post('/createtour',authenticateJWT, hasAdminPermission, createTour)
router.get('/list', tourList)

module.exports = router;