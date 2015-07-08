var http = require('http');

http.createServer(function (request, response) {
  switch(request.url) {
    case '/':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end('<html><body><h1>hello world!</h1></body></html>\n');
      break;
    case '/app.js':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/javascript');
      response.end('console.log("hello world!");\n');
      break;
  }
}).listen(3000);

console.log('http server listening on http://localhost:3000');
