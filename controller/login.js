var mongoose=require("mongoose");
//var User = mongoose.model("User");
var User = require('../model/signup');
var session = require("express-session");

var Ad = require('../model/ads');
//var Users = require('../model/signup');

function checkAuth(req, res, next) {
  if (!req.session.user_id) {
    res.send('You are not authorized to view this page');
  } else {
    next();
  }
}

var sess;

module.exports.userLogin = function(req, res) {
    if (req.body.email && req.body.password) {
      User.authenticate(req.body.email, req.body.password, function(error, user) {
        if (error || !user) {
          var err = new Error("Wrong email or password.");
          err.status = 401;
          //sendJSONresponse(res, 401, err);
          //console.log(err);
        } else {
          //sendJSONresponse(res, 200, user);
        //  console.log(user);
          sess = req.session;
          sess.email=req.body.email;
          var datetime = new Date();
          sess.date = datetime;

          console.log("user session id assigned" + req.session.userId);

          if (req.session) { // Check if session exists
          // lookup the user in the DB by pulling their email from the session
          User.findOne({ email: req.session.email }, function (err, result) {
          if (!result)
          {
          // if the user isn't found in the DB, reset the session info and
          // redirect the user to the login page
          req.session.reset();
          res.redirect('/error');
          } else {
          //  console.log(result);
          //  console.log("USERNAME IS THSIS :")
          //  console.log(result.name);
          // expose the user to the template
            //res.locals.result = result;
          //  var msg= result;
          // render the dashboard page
          res.render("profile",{result:result});
   }
 });
} else {
 res.redirect('/login');
}
        }
      });
    } else {
      var err = new Error("All fields required.");
      err.status = 400;
      //sendJSONresponse(res, 400, err);
      console.log(err);
    }


  };

module.exports.logout = function(req, res) {
    if (req.session) {
      console.log("destroying session " + req.session.userId);
      // delete session object
      req.session.destroy();
      res.locals.user = undefined;
      res.redirect("/");
    }
};
module.exports.checkLogin = function requiresLogin(req, res, next) {
  //
  if (req.session && req.session.userId) {
    console.log("session active");
    next();
  } else {
    console.log("no session active");
    var err = new Error("You must be logged in to view this page.");
    err.status = 401;
    res.redirect("/login");
  }
};
module.exports.editProfile = function (req, res,next) {
    Ad.findById(req.params.id, function (err,ad) {
        if (err) return next(err);
        res.render('editAd', {title: 'Edit hostel-AD' , AdToEdit: ad});
    })
};

module.exports.updateProfile = function (req,res,next){
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

module.exports.postAd =function (req,res){

    let newAd = new Ad({
        vendorID: sess.email,//sess.email,    //hardcode
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
            console.log(sess.email);
            res.redirect('/');
            //res.json({msg: 'Ad has been added successfully!'});
        }
    });
}

global.session1=sess;
