// Importing necessary modules
const express = require('express');

// Importing the employeeRouter for handling employee-related routes
const employeeRouter = require('./Routes/employeeRouter');
// Importing the connectToDatabase function to establish database connection
const connectToDatabase = require('./Config/dbConnection');

// Creating an Express application instance
const app = express();

// Loading environment variables from .env file
require('dotenv').config();
// Setting the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Calling the connectToDatabase function to establish database connection
connectToDatabase();
// Using the employeeRouter for handling routes related to employees
app.use('/employees', employeeRouter);

// Starting the server to listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
