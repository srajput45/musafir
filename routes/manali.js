const express = require("express");
const router = express.Router();
const manaliPageController = require("../controllers/manali")

router.get("/",manaliPageController.manaliPage)
module.exports = router;