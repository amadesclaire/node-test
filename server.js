// This is an express application that returns hello world
// when a request is made to the root path

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
    }
);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});  
