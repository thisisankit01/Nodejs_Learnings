const { response } = require('express');
const express = require('express');
const path = require('path');

const app = express();
// const publicPath = path.join(__dirname,'Demo');

// console.log(publicPath);

// app.use(express.static(publicPath));

//Remove File Extension
const publicPath = path.join(__dirname,'Demo');
app.get('',(_,resp)=>{
  const finalPath = resp.sendFile(`${publicPath}/about.html`)
  console.log(finalPath);
})

app.listen(5500); 



