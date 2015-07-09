var http = require('http');
var fs = require('fs');

function printRequest(request) {
  console.log('*********************************************************');
  console.log(request.method + " " + request.url);
  console.log('*********************************************************');
  for (var key in request.headers) {
    console.log(key.toUpperCase() + ": " + request.headers[key]);
  }

  request.on('data', function (chunk) {
    console.log("");
    console.log(chunk.toString());
  });

  request.on('end', function () {
  console.log('*********************************************************');
  });
}

http.createServer(function (request, response) {
  printRequest(request);

  switch(request.url) {
    case '/':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      var content = fs.readFileSync('app/app.html');
      response.end(content + '\n');
      break;
    case '/app.js':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/javascript');
      var content = fs.readFileSync('app/app.js');
      response.end(content + '\n');
      break;
    case '/app.css':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/css');
      var content = fs.readFileSync('app/app.css');
      response.end(content + '\n');
      break;
    case '/submit':
      response.statusCode = 302;
      response.setHeader('Location', '/');
      response.setHeader('Content-Type', 'text/html');
      response.end();
      break;
  }
}).listen(3000);

console.log('http server listening on http://localhost:3000');
