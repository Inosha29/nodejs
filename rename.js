/////////rename file//////////////
const http = require('http');
var fs = require('fs');

fs.rename('ukinode.txt', 'newukinode.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}).listen(8000);
