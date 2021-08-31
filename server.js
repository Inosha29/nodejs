const http = require('http');

//create a server object:
var server = http.createServer(function (request, response) {
  console.log('got a request')
  response.write("Welcome to Uki. I'm Inosha"); //write a response to the client
  response.end(); //end the response
})
server.listen(8000); //the server object listens on port 8080
