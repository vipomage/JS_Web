const fs = require('fs');


const viewAddMeme = (req, res) => {
  fs.readFile('./views/addMeme.html', 'utf8', (err, data) => {
    if ( err ) {
      console.log(err);
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  });
};

module.exports = viewAddMeme;
