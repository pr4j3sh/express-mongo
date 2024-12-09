const express = require("express");
const {
  getUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
