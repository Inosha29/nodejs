const http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {

  if (request.url == '/head') {
    fs.readFile('head.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    return response.end();
  });
  }
  else if (request.url == '/tail') {
    fs.readFile('tail.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    return response.end();
  });
  }
}).listen(8000);
