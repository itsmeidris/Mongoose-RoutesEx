// Importing the app
const app = require('./server');

// Loading environment variables from .env file
require('dotenv').config();

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Starting the server to listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});