
var http=require('http');
 var exer =require('./ave.js');

http.createServer(function(req,res){
	
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write("Sum = "+exer.sum(123,321));
	res.write(" Average = "+exer.average(123,321));
	res.end();
}).listen(8000);
