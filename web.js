var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

buf=fs.readFileSync('index.html');
data=buf.toString('utf-8');

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
