/* GET 'about us' page */
module.exports.about = function(req, res) {
  res.render("about", {
    title: "About Hostlyte",
    content:
      "HOSTLYTE's description"
  });
};

//Search
module.exports.search = function(req,res){
  res.render('search',{
  title:'Search',
  content:"Search Page"
  });
};

module.exports.contact = function(req,res){
  res.render('search',{
  title:'Contact',
  content:"CONATC PAGE"
  });
};
module.exports.listing = function(req,res){
  res.render('search',{
  title:'LISTING',
  content:"LISTING Page"
  });
};
module.exports.single = function(req,res){
  res.render('search',{
  title:'HOSTEL',
  content:"HOSTLE Page"
  });
};
