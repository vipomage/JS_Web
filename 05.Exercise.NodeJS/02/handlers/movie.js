const moviesDB = require("../config/dataBase");
const fs = require("fs");

function movieHandler(req, res) {
  if ( req.path === '/viewAllMovies' ) {
    let page = fs.readFileSync("./views/viewAll.html").toString();
    let container = '<div class="container">';
    let id = 0;
    moviesDB.forEach(movie => {
      let decoded = decodeURIComponent(movie["moviePoster"]);
      container += `<div class="movie">
          <a href="movies/details/${id++}"><img class="moviePoster" src="${decoded}"/></a>
        </div>`;
    });
    container += "</div>";
    page = page.replace('<div id="replaceMe">{{replaceMe}}</div>', container);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(page);
    res.end();
  }else{
    return true;
  }
  //todo check the other handlers for same;
  
}

module.exports = movieHandler;
