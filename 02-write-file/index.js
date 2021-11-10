const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'out.txt');
fs.writeFile(filePath,'',()=>{});
console.log('Hey, write your text');

process.stdin.on('data', (data)=>{
  if(data.toString().split('\n')[0]==='exit'){
    process.exit();

  }
  fs.readFile(filePath,(err, data1)=>{
    fs.writeFile(filePath, `${data1}${data}` , (err)=>{
      if(err){
        throw err;
      }
    });
 
    console.log('--something else?--');
  });
});

process.on("exit", () => process.stdout.write('--Bye bye--'));
process.on("SIGINT", () => {
  process.exit();
});