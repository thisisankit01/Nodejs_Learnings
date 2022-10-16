const dbConnect = require('./MongoExport');

const update = async()=>{
let data = await dbConnect();
let result = await data.updateOne(
    {name:'A 50s'},{
    $set:{ name:'Oppo'}
  }
);
console.warn(result);
}

update();