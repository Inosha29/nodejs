const http = require('http');

var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('ukinode.txt', 'Uki is the best place to learn programming!',
function (err) {
  if (err) throw err;
  console.log('Saved!');
}).listen(8000);
