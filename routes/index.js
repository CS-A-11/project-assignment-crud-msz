var express = require("express");
var router = express.Router();
var session = require("express-session");
var ctrlOthers = require("../controller/other");
var ctrlMain = require("../controller/main");
var ctrlads = require('../controller/ads_controller');
var ctrlsignUp = require("../controller/signUp");
var ctrllogin = require("../controller/login");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var ctrlSearch = require("../controller/search");
var Users = require('../model/signup');
var session = require("express-session");

function requireLogin (req, res, next) {
  if (!req.user) {
    res.redirect('/login');
  } else {
    next();
  }
};


router.get("/", ctrlads.getAllAds);

/* Other pages*/
router.get("/about", ctrlOthers.about);

router.get('/faq', ctrlOthers.faq);

router.get('/contact',ctrlOthers.contact);

router.get('/error',ctrlOthers.error);

router.get('/postad',ctrlOthers.postad);
//,ctrllogin.checkLogin,
router.get('/login',ctrlOthers.login);

router.post("/login", ctrllogin.userLogin);

router.get("/logout", ctrllogin.logout);

router.get("/profile/:name",ctrlOthers.profile);

router.get("/updateProfile",ctrllogin.updateProfile );

router.get("/register", ctrlsignUp.signUp);

router.post("/register",ctrlsignUp.signUpCreate);

router.post("/search",ctrlSearch.search);

router.get("/search_result",ctrlOthers.search);

router.get("/error",ctrlOthers.error);

router.get('/:id', ctrlads.getById);

router.get('/editad/:id',ctrlads.editad);

router.post('/editad/:id',ctrlads.updateAd);

router.get('/deletead/:id',ctrlads.deleteAd);


module.exports = router;
