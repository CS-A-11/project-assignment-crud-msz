var mongoose = require('mongoose');
var Ad = require('../model/ads');
var Users = require('../model/signup');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var session = require("express-session");
var sendJSONresponse = function(res, status, content) {
    //res.setHeader('content-type', 'application/json');
    res.status(status);
    res.json(content);
  };

  var sess;
  //sess = req.session;
  module.exports.getAllAds = function (req,res){
    Ad.find(function(err,Ads){
        if(err){res.json(err);}
        else{res.render('index',{Ads:Ads});}
    }).sort({createdAt: -1});
}

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer().single('avatar')


var upload = multer({ storage: storage })

module.exports.postAd =function (req,res){

    let newAd = new Ad({
        vendorID: session1,//sess.email,    //hardcode
        title: req.body.title,
        category: (req.body.category),
        total_capacity: (req.body.total_capacity),
        current_capacity: (req.body.current_capacity),
        description: req.body.description,
        price_per_person: parseFloat(req.body.price_per_person),
        near_uni: req.body.near_uni
    });

    newAd.save((err,Ad)=>{
        if(err){
            //sendJSONresponse(res, 400, err);
           //  res.json(err);
           res.redirect('/error');
        }
        else{
            //sendJSONresponse(res, 200, Ad);
              console.log(session1);
            //res.redirect('/');
            //res.json({msg: 'Ad has been added successfully!'});
        }
    });
}

module.exports.editad = function (req, res,next) {
    Ad.findById(req.params.id, function (err,ad) {
        if (err) return next(err);
        res.render('editAd', {title: 'Edit hostel-AD' , AdToEdit: ad});
    })
};

module.exports.updateAd = function (req,res,next){
  if (!req.params.id) {
    sendJSONresponse(res, 404, {
      message: "Not found, id is required"
    });
    return;
  }
    Ad.findOneAndUpdate({_id: req.params.id},{
        $set:{
            title: req.body.title,
            category: parseInt(req.body.category),
            total_capacity: parseInt(req.body.total_capacity),
            current_capacity: parseInt(req.body.current_capacity),
            description: req.body.description,
            price_per_person: parseFloat(req.body.price_per_person)
        }
    },
    function(err,result){
        if(err){res.json(err);}
        else{res.redirect('/'+req.params.id);}
    })
};

module.exports.deleteAd = function (req,res,next){
    Ad.deleteOne({_id: req.params.id},function(err,result){
        if(err){res.json(err);}
        else
        {
            res.redirect('/');
            //res.render('/');
        }
    });
};
module.exports.getById = function (req, res,next) {

    Ad.findById(req.params.id, function (err,Ads) {
        if (err) return next(err);
        console.log(Ads.vendorID);
        Users.findOne({email: Ads.vendorID},function(err,usr){

            res.render('listing', {title: 'hostel list',Ads:Ads,user:usr});
        })


    })
}

module.exports.searchads =function (req,res){

    Ad.find({near_uni:req.body.near_uni},function(err,Ads,next){
        if (err) return next(err);
        res.json(Ads);
        //res.render('search_result', {title: 'hostel list' , Ads: Ads});
    })
}
