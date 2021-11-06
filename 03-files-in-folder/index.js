const fs = require('fs');
const path = require('path');


const filePath = `${__dirname}/secret-folder`;

fs.readdir(filePath, {withFileTypes : true},(err, files )=>{
  if(err) throw err;
  files.map(file => { 
    if(file.isFile){

      fs.stat(`${filePath}/${file.name}`,(err, stats)=>{
        console.log(path.extname(`${file.name}`,stats));
      });
    }
  });
},);
