const express = require('express');
const app = express();

app.get((req,resp)=>{
  resp.send('Hello, This is my Home page')
})

app.get('',(req,resp)=>{
  console.log('Data sent by browser ==>',req.query.name)
  resp.send('Hello, This is my Home page')
})

app.get('/about',(req,resp)=>{
  resp.send('Hello, This is my Home page',req.query.name)
})

app.listen(4500);