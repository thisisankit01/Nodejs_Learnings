// make file
// delete file
// read file
// update file
// rename file


// 1. make file
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}\apple.txt`;

//creating file
//fs.writeFileSync(filePath ,'This is a Apple Iphone 80000 ka , Your Home Gone');


//readfile
// fs.readFile(filePath,'utf8',(err,item)=>{
//   console.log(item)
// })

//update
// fs.appendFile(filePath,' and filr name is apple.txt',(err)=>{
//   if(!err){
//     console.log("File is updated")
//   }
// })

//rename
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//   if(!err)
//     console.log("file name is updated")
// })

//delete file
fs.unlinkSync(`${dirPath}/fruit.txt`);