const staticHandler = require('./static');
const viewHandler = require('./views');
const movieHandler = require('./movie');


const errorHandler = require('./error');


module.exports = [
  staticHandler,
  viewHandler,
  movieHandler,
  errorHandler
];