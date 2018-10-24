// This is where we configure and run the application.

// Import environmental variables. Running the following line of code
// reads the .env file and affixes them to node's
require('dotenv').config()
// import application we configured in app.js
const app = require('./app.js');

app.listen(process.env.API_PORT);
console.log("API is now listening at http://localhost:" + process.env.API_PORT)
