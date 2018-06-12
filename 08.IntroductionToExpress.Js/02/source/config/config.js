const mongodb = require('mongodb');

let connectinStr = 'mongodb://localhost:27017/testDatabase';

mongodb
  .MongoClient
  .connect(connectinStr)
  .then(client =>console.log(client));

