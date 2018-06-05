const homeHandler = require('./homeHandler');
const memeHandler = require('./memeHandler');
const staticHandler = require('./staticHandler');
const viewAll = require('./viewAll');
const getDetails = require('./getDetails');
const viewAddMeme = require('./viewAddMeme');
const addMeme = require('./addMeme');


module.exports = [ homeHandler, memeHandler, staticHandler, viewAll, getDetails, viewAddMeme, addMeme ];
