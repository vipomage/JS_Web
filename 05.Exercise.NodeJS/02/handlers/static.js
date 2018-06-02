const fs = require("fs");

const mimeTypes = {
  css: "text/css",
  js: "javascript/application",
  png: "image/png",
  jpg: "image/jpg"
};

function staticHandler(req, res) {
  if (req.path.startsWith("/public/")) {
    const extension = req.path.split(".").pop();
    res.writeHead(200, { "Content-Type": mimeTypes[extension] });
    try {
      const data = fs.createReadStream(`.${req.path}`);
      data.pipe(res);
    } catch (e) {
      console.log(e);
    }
  } else {
    return true;
  }
}

module.exports = staticHandler;
