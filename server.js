const http = require("http");

const { app } = require("./backend");

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is currently running!");
});
