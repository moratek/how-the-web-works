var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
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
  }
}).listen(3000);

console.log('http server listening on http://localhost:3000');
