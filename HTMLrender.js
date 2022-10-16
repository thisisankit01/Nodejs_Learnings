const express = require('express')
const app = express();

app.get("",(req,resp)=>{
resp.send(`<h1> Welcome To The World</h1>`);
})

app.get("/about",(req,resp)=>{
  resp.send(`
  <input type = "text" placeholder="Type Here" value="${req.query.name}"/>
  <button> Click Me</Button>
  `);
  });

  app.get("/help",(req,resp)=>{
    resp.send([{
      name: 'Ankit' , email: 'ankit@gmail.com',
    },
    {
      name: 'Yash',  email: 'yash@gmail.com' 
    }]);
    })


    //link pages
    app.get("/about",(req,resp)=>{
      resp.send(`
      <h1> Welcome To The World</h1>
      <a href="/about">Go to About Page</a>
      `);
      })

app.listen(2000);