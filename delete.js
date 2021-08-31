//////////delete file////////////
const http = require('http');
var fs = require('fs');

fs.unlink('newukinode.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}).listen(8000);
