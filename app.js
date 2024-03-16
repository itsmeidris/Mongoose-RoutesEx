// Importing necessary modules
const express = require('express');
const mongoose = require('mongoose');

// Importing the employeeRouter for handling employee-related routes
const employeeRouter = require('./Routes/employeeRouter');

// Creating an Express application instance
const app = express();

// Loading environment variables from .env file
require('dotenv').config();
// Setting the port for the server to listen on
const PORT = process.env.PORT || 3000;
// URI for connecting to the MongoDB database
const uri = process.env.URI;

// Middleware to parse JSON request bodies
app.use(express.json());

// Function to connect to the MongoDB database
const connectToDatabase = async () => {
    try {
        // Connecting to the MongoDB database
        await mongoose.connect(uri);
        console.log(`Connected to database successfully`);

        // Using the employeeRouter for handling routes related to employees
        app.use('/employees', employeeRouter);
    } catch (e) {
        // Logging any errors that occur during database connection
        console.log(`Error: ${e.message}`);
    }
}

// Calling the connectToDatabase function to establish database connection
connectToDatabase();

// Starting the server to listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
