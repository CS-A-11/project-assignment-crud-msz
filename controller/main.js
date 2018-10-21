
//Main Page - controller logic
module.exports.home = function(req,res)
{
res.render('home',{
  title:'Hostlyte',
  content:"This is our main page of the website.",
});
};
