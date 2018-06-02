const moviesDB = require("../config/dataBase");
const fs = require("fs");

function movieHandler(req, res) {
  let page = fs.readFileSync("./views/viewAll.html").toString();
  let container = '<div class="container">';
  moviesDB.forEach(movie => {
    let decoded = decodeURIComponent(movie["moviePoster"]);
    container += `<div class="movie">
          <img class="moviePoster" src="${decoded}"/>
        </div>`;
  });
  container += "</div>";
  page = page.replace('<div id="replaceMe">{{replaceMe}}</div>', container);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(page);
  res.end();
}

module.exports = movieHandler;
