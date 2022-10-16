const express = require('express');
const app = express();

const reqFilter = require('./GlobalMiddleware')

app.get('/',(req,resp)=>{
  resp.send('Welcome to Home page')
})

app.get('/users',reqFilter,(req,resp)=>{
  resp.send('Welcome to users page')
})

app.listen(6000);