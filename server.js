// Dependencies
var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function(req,res) {
    res.send("Hello, Joe!")
});

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});