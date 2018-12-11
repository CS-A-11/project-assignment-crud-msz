
/* GET 'about us' page */
module.exports.about = function(req,res)
{
res.render('about',{
  title:"Hostlyte| Largest Hostel Classified Portal"
});
};

module.exports.faq = function(req,res)
{
res.render('faqs');
};

module.exports.error = function(req,res)
{
res.render('error');
};


module.exports.contact = function(req,res)
{
res.render('contact');
};

module.exports.login = function(req, res) {
    res.render("login");
  };

module.exports.error = function(req,res){
  res.render('error');
};

module.exports.postad = function(req,res){
  res.render('postad');
};

module.exports.profile = function(req,res){
    res.render('profile');
};

module.exports.register = function(req,res){
  res.render('register')
};

module.exports.listing = function(req,res)
{
   res.render('listing');
};

module.exports.search = function (req,res){

  res.render('search_result');

};
// controllers/products.js
