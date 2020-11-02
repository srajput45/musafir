const express = require("express");
const router = express.Router();
const keralaPageController = require("../controllers/kerala")

router.get("/",keralaPageController.keralaPage)
module.exports = router;