const express = require("express");
const {
  getPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

router.route("/").get(getPosts);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
