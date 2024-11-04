const { exit } = require("process");
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database");
  } catch (error) {
    console.error(error.message);
    exit(1);
  }
}

module.exports = connectDB;
