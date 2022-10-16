const express = require('express');
const app = express();

const reqFilter = (req,resp,next) => {
  
  if(!req.query.age){
    resp.send("please provide age");
  }
  else if(req.quert.age<18){
    resp.send("You cannot access this page");
  }
  else{
    next();
  }
}

app.use(reqFilter);

app.get('/',(req,resp)=>{
  resp.send('Welcome to Home page')
})

app.get('/users',(req,resp)=>{
  resp.send('Welcome to users page')
})

app.listen(7000)