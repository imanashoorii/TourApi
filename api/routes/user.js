const express = require('express');
const router = express.Router();

// Controllers 
const UserController = require('../controllers/user');
const {
    createUser,
    // updateUserPersonalData,
    login
} = UserController;


// Auth Routes
router.post('/signup', createUser)
// router.post('/updateuser', updateUserPersonalData)
router.post('/login', login)

module.exports = router;


