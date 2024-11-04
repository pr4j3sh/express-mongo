const { asyncHandler } = require("exhandlers");

const check = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, message: "server online" });
});

module.exports = { check };
