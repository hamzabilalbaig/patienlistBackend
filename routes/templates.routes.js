var express = require("express");
const {
  createTemplate,
  addtemplateData,
  getalltemplates,
  gettemplatebyid,
  deleteTemplate,
} = require("../controllers/templates.controller");

var router = express.Router();

router.post("/createTemplate", createTemplate);
router.put("/addtemplateData", addtemplateData);
router.get("/getalltemplates", getalltemplates);
router.get("/gettemplatebyid/:id", gettemplatebyid);
router.delete("/deleteTemplate/:id", deleteTemplate);

module.exports = router;
