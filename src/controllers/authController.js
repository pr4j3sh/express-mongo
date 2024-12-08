const { asyncHandler, hashHandler } = require("exhandlers");
const User = require("../models/userModel");

const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    throw new Error("Fields are missing");
  }

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    throw new Error("Email already exists");
  }
  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    throw new Error("Username already exists");
  }

  const hashedPassword = await hashHandler(password);
  if (!hashedPassword) {
    throw new Error("Failed to create a password hash.");
  }
  console.log(hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (!user) {
    throw new Error("Failed to create user");
  }

  res.status(201).json({ success: true, user: user });
});

module.exports = { register };
