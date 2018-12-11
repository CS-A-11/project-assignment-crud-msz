var express = require("express");
var router = express.Router();
var ctrlOthers = require("../controller/other");
var ctrlMain = require("../controller/main");
var ctrllogin = require("../controller/login");
var ctrlads = require('../controller/ads_controller');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
router.get('/ads',ctrlads.getAllAds);
router.post('/postad',ctrllogin.postAd);
//router.get('/:id',ctrlads.listing);

//router.put('/editad/:id',ctrlads.updateAd);


module.exports = router;
