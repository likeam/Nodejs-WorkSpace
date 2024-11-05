import http from "http";

//Create Server

const server = http.createServer((req, res) => {
  //   console.log(req);

  //   res.statusCode = 404;
  //   res.statusMessage = "BAD";
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello From Node.js Server</h1>");
});

//Listing Server at port 8000
server.listen(8000, () => console.log("Server UP!"));
