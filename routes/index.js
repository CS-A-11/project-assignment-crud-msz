var express = require("express");
var router = express.Router();
var ctrlOthers = require("../controller/other");
var ctrlMain = require("../controller/main");
var ctrlSearch = require("../controller/search");
/* Locations pages */
router.get("/", ctrlMain.home);

/* Other pages*/
router.get("/about", ctrlOthers.about);

router.get('/search',ctrlSearch.search);

router.get('/contact',ctrlOthers.contact);

router.get('/listing',ctrlOthers.listing);

router.get('/listing/hostel',ctrlOthers.single);

module.exports = router;
