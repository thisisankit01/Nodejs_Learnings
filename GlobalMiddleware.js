module.exports = (req,resp,next) => {
  
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