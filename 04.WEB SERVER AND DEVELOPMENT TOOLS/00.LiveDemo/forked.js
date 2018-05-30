const cluster = require("cluster");
const http = require("http");
const numCPUs = 4;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("process " + process.pid + " say hello!");
    })
    .listen(8000);
}
