const express = require('express');
const dbConnect = require('./MongoExport');
const app = express();

//for getting data from postman or req
app.use(express.json());

//get api
app.get('/',async(req,resp)=>{
let data = await dbConnect();
data = await data.find().toArray();
resp.send(data);
});

//post api
app.post('/', async(req,resp)=>{
  let data = await dbConnect();
 let result = await data.insertOne(req.body);
resp.send(result);
});

//PUT api : update
app.put('/:name',async(req,resp)=>{
  let data = await dbConnect();
  let result = data.updateOne(
    {name: req.params.name},
    {$set:req.body}
  )
resp.send({result : "update"});
})

app.listen(7000);