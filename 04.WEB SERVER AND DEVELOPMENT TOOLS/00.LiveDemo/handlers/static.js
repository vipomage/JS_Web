const fs = require("fs");

const mimeTypes = {
  css: "text/css",
  js: "application/javascript",
  png: "image/png",
  jpg: "image/jpg"
};

function staticHandler(req, res) {
  if (req.path.startsWith("/static/")) {
    const extension = req.path.split(".").pop();
    res.writeHead(200, { "content-type": mimeTypes[extension] });
    try {
      const read = fs.createReadStream(`.${req.path}`);
      read.pipe(res);
    } catch (e) {
      console.log(e);
    }
  } else {
    return true;
  }
}

module.exports = staticHandler;
