const express = require("express");
const {
  register,
  login,
  getToken,
  verifyEmail,
  resetPassword,
} = require("../controllers/authController");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/token").post(getToken);
router.route("/verify-email").post(verifyEmail);
router.route("/reset-password").post(resetPassword);

module.exports = router;
