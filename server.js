// Dependencies
var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function(req,res) {
    res.send("Hello, Joe!")
});

// Start our server
app.listen(PORT, function() {
  console.log("Server listening on: " + PORT);
});