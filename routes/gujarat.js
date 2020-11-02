const express = require("express");
const router = express.Router();
const gujaratPageController = require("../controllers/gujarat")

router.get("/",gujaratPageController.gujaratPage)
module.exports = router;