const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/index.html") {
    let stat = fs.statSync("./index.html");

    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": stat.size
    });

    let readStream = fs.createReadStream("./index.html");
    readStream.pipe(res);
  } else {
    res.end("404");
  }
});

server.listen(8000);
