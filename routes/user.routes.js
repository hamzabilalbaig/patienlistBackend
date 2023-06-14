var express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  deleteUser,
} = require("../controllers/user.controller");

var router = express.Router();

router.post("/createUser", createUser);
router.post("/login", loginUser);
router.get("/getAllUsers", getAllUsers);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
