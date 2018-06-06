let db = require("../db/db");
const fs = require("fs");

const getDetails = (req, res) => {
  const regex = /^\/getDetails\?id=(.+)/;
  const id = regex.exec(req.url)[ 1 ];
  const targetedMeme = db.filter(meme => meme.id === id)[ 0 ];
  
  fs.readFile("./views/details.html", "utf8", (err, data) => {
    if ( err ) {
      console.log(err);
    } else {
      let replacement = `<div class="content">
    <img src="${targetedMeme.memeSrc}" alt=""/>
    <h3>Title <br> <em>${targetedMeme.title}</em> </h3>
    <p> ${targetedMeme.description}</p>
    <button><a href="${targetedMeme.memeSrc}">Download Meme</a></button>
    </div>`;
      data = data.replace(
        '<div id="replaceMe">{{replaceMe}}</div>',
        replacement
      );
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    }
  });
};

module.exports = getDetails;
