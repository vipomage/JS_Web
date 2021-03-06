const viewAll = require('./viewAll');
const getDetails = require('./getDetails');
const viewAddMeme = require('./viewAddMeme');
const addMeme = require('./addMeme');

module.exports = (req, res) => {
  if ( req.pathname === '/viewAllMemes' && req.method === 'GET' ) {
    viewAll(req, res);
  } else if ( req.pathname === '/addMeme' && req.method === 'GET' ) {
    viewAddMeme(req, res);
  } else if ( req.pathname === '/addMeme' && req.method === 'POST' ) {
    addMeme(req, res);
  } else if ( req.pathname.startsWith('/getDetails') && req.method === 'GET' ) {
    getDetails(req, res);
  } else {
    return true;
  }
};

