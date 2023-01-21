const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login");
const validate = require("../middlewares/validate");

router.post("/", validate, loginController);

module.exports = router;
