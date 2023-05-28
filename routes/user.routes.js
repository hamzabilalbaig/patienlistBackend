var express = require("express");
const { createUser, loginUser } = require("../controllers/user.controller");

var router = express.Router();

router.post("/createUser", createUser);
router.post("/login", loginUser);

module.exports = router;
