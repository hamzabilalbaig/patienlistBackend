var express = require("express");
const {
  createItem,
  deleteItemById,
  getItemById,
  getAllItems,
  editItemById,
} = require("../controllers/pharmacy.controller");

var router = express.Router();

router.post("/createItem", createItem);
router.get("/getAllItems", getAllItems);
router.get("/getItemById/:id", getItemById);
router.put("/editItemById/:id", editItemById);
router.delete("/deleteItem/:id", deleteItemById);

module.exports = router;
