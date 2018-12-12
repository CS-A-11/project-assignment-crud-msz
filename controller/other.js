const nodemailer = require('nodemailer');
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
module.exports.contact_form =function(req,res)
{
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "Muhammad.saadzaheer991",
      pass: "perfectworking!"
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: "Muhammad.saadzaheer991",
    subject: 'New message from contact form at MSZ',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
         res.render('error');
    }
    else {
      //console.log("GOODDDDDDDDDD");
         res.render('contact_success');
    }
  });
}
module.exports.login = function(req, res) {
    res.render("login");
  };

module.exports.CS = function(req, res) {
      res.render("contact_success");
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
