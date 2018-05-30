const fs = require("fs");

function handleBigFile(req, res) {
  if (req.path === "/bigFile") {
    const read = fs.createReadStream('./file.txt');
    read.on('data',  data => {
      res.writeHead(200, {"content-type": "text/plain"});
      res.write(data);
    });
    read.on("end", () => {
      res.end();
    });
  } else {
    return true;
  }
}
module.exports = handleBigFile;
