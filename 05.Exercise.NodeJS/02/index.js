const http = require("http");
const fs = require("fs");
const url = require("url");
const handlers = require("./handlers");
const parse = require("querystring").parse;
const port = 8888;

http.createServer(frontController).listen(port);

function frontController(req, res) {
  req.path = url.parse(req.url).pathname;

  res.redirect = url => {
    res.writeHead(302, { Location: url });
    res.end();
  };
  res.sendHtml = path => {
    fs.readFile(path, "utf8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.method === "GET") {
    for (let handler of handlers) {
      if (handler(req, res) !== true) {
        break;
      }
    }
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", data => {
      let page = fs.readFileSync("./views/viewAll.html").toString();
      let err =
        '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>';
      let success =
        '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>';
      body += data;
      if (
        parse(body)["movieTitle"] !== "" &&
        parse(body)["moviePoster"] !== ""
      ) {
        let db = require("./config/dataBase");
        db.push(parse(body));
        db = "let db = " + JSON.stringify(db) + ";\nmodule.exports = db;"; //I love hax!! :D
        fs.writeFileSync("./config/dataBase.js", db, "utf8");
        page = page.replace('<div id="replaceMe">{{replaceMe}}</div>', success);
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(page);
      } else {
        page = page.replace('<div id="replaceMe">{{replaceMe}}</div>', err);
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(page);
      }
    });

    req.on("end", () => {
      res.end();
    });
  }
}

console.log(`Server up and running \nListening on port ${port}`);
