const fs = require('fs');
const path = require('path');

const filename = '/text.txt';
const pathObj = path.join(__dirname+filename);
const stream = fs.createReadStream(pathObj,  'utf8');
stream.on('data', function(chunk){

  console.log(chunk);
});

