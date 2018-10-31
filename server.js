const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolio-react";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI), { useNewUrlParser: true };
// Connect to the Mongo DB


mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('connected',function () {  
  console.log('Mongoose default connection  ' + "mongodb://localhost/portfolio-react");
}); 
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

