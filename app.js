require('dotenv').config();
require('rootpath')();
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {
  API_BASE_URL,
  UPLOAD_BASE_URL
} = require('./api/constants');

// API Routes
const apiRoutes = require('./api/routes');

// Register Content Types
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve Uploaded Files
app.use('/uploads', express.static(UPLOAD_BASE_URL));

// Connect To Mongodb
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
  } catch (error) {
   throw error
  }
};
connectToMongoDB();

// Register API Routes
app.use(API_BASE_URL, apiRoutes);

module.exports = app;