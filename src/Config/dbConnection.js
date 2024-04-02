const mongoose = require('mongoose');

require('dotenv').config();
const uri = process.env.URI;

// Function to connect to the MongoDB database
const connectToDatabase = async () => {
    try {
        // Connecting to the MongoDB database
        await mongoose.connect(uri);
        console.log(`Connected to database successfully`);
        
    } catch (e) {
        // Logging any errors that occur during database connection
        console.log(`Error: ${e.message}`);
    }
}

module.exports = connectToDatabase;