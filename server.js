//INSTRUCTIONS: Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

//required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//configure express app
var app = express();
var PORT = process.env.PORT || 8080;

//set path to access public directory
app.use(express.static(path.join(_dirname, './app/public')));

// middleware for parsing requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//application routes
require(path.join(_dirname, './app/routing/apiRoutes'))(app);
require(path.join(_dirname, '/.app/routing/htmlRoutes'))(app);

//start listening 
app.listen(PORT, function() {
    console.log('Friend Finder is listening on PORT: ' + PORT);
});