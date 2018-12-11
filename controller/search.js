var mongoose = require('mongoose');
var Ad = require('../model/ads');
//Search
module.exports.search = function (req,res){
  var search1 = req.body.title;
  if(search1.length!=0){
    Ad.find({near_uni:req.body.near_uni,category:req.body.category,title: { $regex: search1, $options: 'i' }},function(err,Ads,next){
          if (err) return next(err);
          //res.json(Ads);
          res.render('search_result', {title: 'hostel list' , Ads: Ads});
        })
  }
  else{
    Ad.find({near_uni:req.body.near_uni,category:req.body.category},function(err,Ads,next){
      if (err) return next(err)
      //res.json(Ads);
      res.render('search_result', {title: 'hostel list' , Ads: Ads});
    })

  }
}





