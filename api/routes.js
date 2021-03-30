const express = require('express');
const router = express.Router();

const userRoutes = require('./routes/user');
const tourRoutes = require('./routes/tour')

router.use('/users', userRoutes);
router.use('/tours', tourRoutes)

module.exports = router;