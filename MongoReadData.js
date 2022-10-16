const dbConnect = require('./MongoExport') ;

dbConnect().then((resp)=>{
  console.warn(resp.find().toArray().then((data)=>{
    console.warn(data);
  }))
})

// const main = async()=>{

// let data = await dbConnect();
// data = await data.find().toArray();
// console.warn(data);

// }
// main();