const express = require("express");
const router = express.Router();
const homePageController = require("../controllers/home")

router.get("/",homePageController.homePage);

router.post("/signin",homePageController.signinPage)
module.exports = router;