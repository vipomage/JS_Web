const moviesDB = require("../config/dataBase");
const fs = require("fs");

function detailsHandler(req, res) {
  if (req.path.startsWith("/movies/details/")) {
    let page = fs.readFileSync("./views/details.html").toString();
    let container = '<div class="container">';
    let id = req.path.split("/").pop();
    let obj = moviesDB[id];
    let decodedImg = decodeURIComponent(obj["moviePoster"]);
    let decodedTitle = decodeURIComponent(obj["movieTitle"]).replace(
      /\+/g,
      " "
    );
    let decodedYear = decodeURIComponent(obj["movieYear"]).replace(/\+/g, " ");
    let decodedDescr = decodeURIComponent(obj["movieDescription"]).replace(
      /\+/g,
      " "
    );
    container += `<div class="content">
    <img src="${decodedImg}" alt=""/>
    <h3>Title ${decodedTitle}</h3>
    <h3>Year ${decodedYear}</h3>
    <p>${decodedDescr}</p>
</div>`;
    container += "</div>";
    page = page.replace('<div id="replaceMe">{{replaceMe}}</div>', container);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(page);
    res.end();
  } else {
    return true;
  }
}

module.exports = detailsHandler;
