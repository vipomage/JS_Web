const http = require("http");
const fs = require("fs");
const formidable = require("formidable");

function Server(req, res) {
  fs.readFile("index.html", "utf8", (err, data) => {
    if ( err ) {
      console.log(err);
      return;
    }
    if ( req.method === "GET" ) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    } else {
      let form = new formidable.IncomingForm();
      
      form.parse(req, (err, fields, files) => {
        if ( err ) {
          console.log(err);
        }
        let file = files.upload;
        let tempPath = file.path;
        let fileName = file.name;
        
        fs.rename(tempPath, "./files/" + fileName, error => {
          if ( err ) {
            console.log(err);
            
          }
        });
        
        res.write("Thank You!");
        res.end();
      });
    }
  });
}

http.createServer((req, res) => Server(req, res)).listen(8888);
