const fs = require("fs");
let db = require("../db/db");
const viewAll = (req, res) => {
  fs.readFile("./views/viewAll.html", "utf8", (err, data) => {
    if ( err ) {
      console.log(err);
    } else {
      let forReplacement = '<div id="replaceMe">{{replaceMe}}</div>';
      db = [ ...db ].sort((a, b) => {
        return new Date(b[ "dateStamp" ]) - new Date(a[ "dateStamp" ]);
      });
      let container = "";
      for ( let meme of db ) {
        container += `<div class="meme">
<a href="/getDetails?id=${meme[ "id" ]}">
<img class="memePoster" src="${meme[ "memeSrc" ]}"/>
</a>
</div>`;
      }
      data = data.replace(forReplacement, container);
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    }
  });
};

module.exports = viewAll;
