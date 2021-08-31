/////////update file/////////////
const http = require('http');
var fs = require('fs');

fs.appendFile('ukinode.txt', ' Many students are learning in Uki.',
function (err) {
  if (err) throw err;
  console.log('Updated!');
}).listen(8000);
