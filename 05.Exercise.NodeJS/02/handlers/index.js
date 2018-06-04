const staticHandler = require('./static');
const viewHandler = require('./views');
const movieHandler = require('./movie');
const detailsHandler = require('./details');

const errorHandler = require('./error');

module.exports = [
  staticHandler,
  viewHandler,
  movieHandler,
  detailsHandler,
  errorHandler
];