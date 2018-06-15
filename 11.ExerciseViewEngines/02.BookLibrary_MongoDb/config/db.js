const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connectionString = 'mongodb://localhost:27017/bookLibrary';
module.exports = require('./bookSchema');
module.exports = mongoose.connect(connectionString);
