var http = require('http');

http.createServer(function (request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('hello world!\n');
}).listen(3000);

console.log('http server listening on http://localhost:3000');
