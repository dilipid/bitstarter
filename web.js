var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var infile = "index.html"
  var buf = fs.readFileSync(infile);
  console.log(buf.toString('utf-8'));
  //response.send('Hello World 2!');
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
