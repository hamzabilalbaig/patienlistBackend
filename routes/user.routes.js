var express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
} = require("../controllers/user.controller");

var router = express.Router();

router.post("/createUser", createUser);
router.post("/login", loginUser);
router.get("/getAllUsers", getAllUsers);

module.exports = router;
