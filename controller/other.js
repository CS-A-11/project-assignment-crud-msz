

/* GET 'about us' page */
module.exports.about = function(req,res)
{
res.render('about');
};

module.exports.faq = function(req,res)
{
res.render('faqs');
};

module.exports.contact = function(req,res)
{
res.render('contact');
};

module.exports.error = function(req,res){
  res.render('error');
};

module.exports.postad = function(req,res){
  res.render('postad');
};

module.exports.login = function(req,res){
  res.render('login')
};

module.exports.register = function(req,res){
  res.render('register')
};
