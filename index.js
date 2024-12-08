const express = require("express");
const {
  errorHandler,
  corsHandler,
  logHandler,
  notFoundHandler,
  mongoHandler,
} = require("exhandlers");

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const origins = process.env.ORIGINS;
const uri = process.env.MONGO_URI;

const server = express();

server.use(express.json());
server.use(corsHandler(origins));
server.use(logHandler());

server.use("/api/health", require("./src/routes/healthRoute"));
server.use("/api/auth", require("./src/routes/authRoutes"));

server.use(notFoundHandler);
server.use(errorHandler);

mongoHandler(uri);

server.listen(port, hostname, () => {
  console.log(`server running @ http://${hostname}:${port}`);
});
