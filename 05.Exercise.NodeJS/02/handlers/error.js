function errorHandler(req,res){
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('404 Not Found');
}

module.exports = errorHandler;