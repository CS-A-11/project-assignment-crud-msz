var express = require("express");
var router = express.Router();
var ctrlOthers = require("../controller/other");
var ctrlMain = require("../controller/main");

/* Locations pages */
router.get("/", ctrlMain.home);

/* Other pages*/
router.get("/about", ctrlOthers.about);

router.get('/faq', ctrlOthers.faq);

router.get('/contact',ctrlOthers.contact);

router.get('/error',ctrlOthers.error);

router.get('/postad',ctrlOthers.postad);

router.get('/login',ctrlOthers.login);

router.get('/register',ctrlOthers.register);

module.exports = router;
