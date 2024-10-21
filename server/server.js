const http = require("http");

const { app } = require("./backend");

const server = http.createServer(app);

server.listen(3000, "192.168.0.101", () => {
  console.log("Server is currently running!");
});
