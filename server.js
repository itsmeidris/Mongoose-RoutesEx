// Importing necessary modules
const express = require('express');

// Importing the employeeRouter for handling employee-related routes
const employeeRouter = require('./src/Routes/employeeRouter');
// Importing the connectToDatabase function to establish database connection
const connectToDatabase = require('./src/Config/dbConnection');

// Creating an Express application instance
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Calling the connectToDatabase function to establish database connection
connectToDatabase();
// Using the employeeRouter for handling routes related to employees
app.use('/employees', employeeRouter);

// Exporting the app
module.exports = app;