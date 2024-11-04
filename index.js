const express = require("express");
const cors = require("cors");
const connectDB = require("./src/database");
const { corsOptions } = require("./src/lib/cors");

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const server = express();

server.use(cors(corsOptions));
server.use(express.json());

server.listen(port, hostname, async () => {
  await connectDB();
  console.log(`server running @ http://${hostname}:${port}`);
});