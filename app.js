// Node.js express to make an http echo server.
var express = require('express');
var app = express();

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('HTTP Echo Server app listening at http://%s:%s', host, port);
});

// *********************************************************************************************************************

// When you visit /headers the server should return an object containing the request headers.
app.get('/headers', function(request, response) {
    response.json({
      headers: request.headers
    });
});

// Outputted this from my linux in chrome browswer:
//{
//headers: {
//host: "localhost:3000",
//connection: "keep-alive",
//accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
//upgrade-insecure-requests: "1",
//user-agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
//accept-encoding: "gzip, deflate, sdch",
//accept-language: "en-US,en;q=0.8"
//}
//}

// ************************************************************************************************************************

// When you visit /headers/:header_name the server should return a string containing the contents of the specified header.
app.get('/headers/:accept', function(request, response) {
    response.json({
      accept: request.headers.accept
    });
});

// Outputted this from my linux in chrome browser:
//{
//accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
//}

// ************************************************************************************************************************
  
// When you visit /version the server should return a string containing the HTTP version of the request.
app.get('/version', function(request, response) {
    response.json({
      version: request.httpVersion
    });
});

// Outputted this from my linux in chrome browser:
// {
//version: "1.1"
//}
