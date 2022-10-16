const dbConnect = require('./MongoExport');

const insert = async ()=>{
  const db = await dbConnect();
  const result = await db.insertMany([
    {name : 'Vivo' , brand: 'Red Label', price: 850, category: 'Mobile'},
    {name : 'Micromax' , brand: 'Red Label', price: 860, category: 'Mobile'},
    {name : 'Nokia' , brand: 'Red Label', price: 870, category: 'Mobile'}
]);
  console.log(result);
  if(result.acknowledged){
    console.log('Data Inserted')
  }
}

insert();