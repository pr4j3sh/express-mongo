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

const login = asyncHandler(async (req, res) => {});

const getToken = asyncHandler(async (req, res) => {});

const verifyEmail = asyncHandler(async (req, res) => {});

const resetPassword = asyncHandler(async (req, res) => {});

module.exports = { register, login, getToken, verifyEmail, resetPassword };
