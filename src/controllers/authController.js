const { asyncHandler } = require("exhandlers");
const User = require("../models/userModel");

const handlePassword = (password) => {
  const hashedPassword = password;
  return hashedPassword;
};

const register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Fields are missing");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }
});
