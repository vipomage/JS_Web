function viewHandler(req, res) {
  if (
    req.path === "/" ||
    req.path === "/index.html" ||
    req.path === "/home.html"
  ) {
    res.sendHtml("./views/home.html");
  }
  else if (req.path === "/addMovie") {
    res.sendHtml("./views/addMovie.html");
  } else if (req.path === "/status") {
    res.sendHtml("./views/status.html");
  } else if (req.path === "movies/details/") {
    res.sendHtml("./views/details.html");
  } else {
    return true;
  }
}

module.exports = viewHandler;
