const express = require("express");
const connectDB = require("./src/database");
const {
  errorHandler,
  corsHandler,
  logHandler,
  notFoundHandler,
} = require("exhandlers");

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const server = express();

server.use(corsHandler());
server.use(express.json());
server.use(logHandler);

server.use("/api/health", require("./src/routes/healthRoute"));

server.use(notFoundHandler);
server.use(errorHandler);

server.listen(port, hostname, async () => {
  await connectDB();
  console.log(`server running @ http://${hostname}:${port}`);
});
