const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
let database = 'e-commerce';
const client = new MongoClient(url);

async function getData(){
  //connecting to dataabse
  let result = await client.connect();

  //database named e-commerce
  let db = result.db(database);

  //fetching the conten we need
  let collection = db.collection('products');

  //find method fetch the data inside products
let response = await collection.find({}).toArray();
console.log(response);
}

getData();