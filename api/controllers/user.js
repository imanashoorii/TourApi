const mongoose = require('mongoose');
// Models 
const User = require('../models/user');
// User Authentication Libs
const Role = require('../middlewares/_helpers/role');

const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const Bcrypt = require("bcryptjs");

exports.createUser = (req, res) => {
    const { phoneNumber, firstName, lastName, username, role, password, emailAddress } = req.body;
    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        phoneNumber: phoneNumber,
        firstName: firstName,
        lastName: lastName,
        username: username,
        role: role,
        password: Bcrypt.hashSync(password, 10),
        emailAddress: emailAddress
    })
    
    newUser.save((err, result) => {
        if (err) {
            console.log(err)
            res.status(400).json({
                "message": "User Creation Failed"
            })
        } else {
            console.log(result)
            res.status(200).json({
                "message": `User with Role ${role} Created`
            })
        }
    })
};


exports.login =  async (request, response) => {
    try {
        var user = await User.findOne({ username: request.body.username }).exec();
        if(!user) {
            return response.status(400).send({ message: "The username does not exist" });
        }
        if(!Bcrypt.compareSync(request.body.password, user.password)) {
            return response.status(400).send({ message: "The password is invalid" });
        }
        const accessToken = jwt.sign({ username: user.username,  role: user.role, id:user._id }, process.env.ACCESS_TOKEN);
        return response.json({
            accessToken
        });
        
    } catch (error) {
        response.status(500).send(error);
        
    }
};