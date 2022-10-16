const fs = require('fs');
const path = require('path');
const pathDir = path.join(__dirname);
console.warn(pathDir);

for (i=0; i<5 ; i++)
{
  fs.writeFileSync(pathDir+"/Text_Files"+"/hello"+i+8+".txt","a simple Hello World File");
}

fs.readdir(pathDir,(err,files)=>{
files.forEach((item)=>{
console.log('file name is',item)
  })
  })