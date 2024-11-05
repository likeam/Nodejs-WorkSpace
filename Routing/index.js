import http from "http";

const server = http.createServer((req, res) => {
  //Routing

  if (req.url === "/") {
    // res.end("<h1>Home</h1>");
    res.end("<a href='/contact' >  <h1>Contact Page </h1> </a> ");
  } else if (req.url === "/about") {
    res.end("<h1>About Section</h1>");
  } else if (req.url === "/footer") {
    res.end("<h1>Footer Section</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1> Contact Section</h1>");
  } else {
    res.end("<h1> Page not found</h1>");
  }
});

server.listen(8000, () => console.log("Server Up!"));
