const express = require("express");
const router = express.Router();
const controller = require("../controller/messageController");

router
  .route("/")
  .post(controller.messageController)
  .get(controller.sendToScreen);

module.exports = router;
