const mongodb = require('mongodb');

let connectionStr = 'mongodb://localhost:27017/pets';

mongodb
  .MongoClient
  .connect(connectionStr)
  .then(client => {
    let db = client.db('pets');
    let dogs = db.collection('dogs');
    
    dogs.insert({
      name: 'ivan',
      age: 4,
      color: 'black',
      breed: 'whatever'
    });
    
    
    dogs.find({}).toArray((err, dogs) => console.log(dogs));
  });

