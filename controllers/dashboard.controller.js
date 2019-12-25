var config = require('config');
var base_url = config.get('base_url');
var favicon = config.get('favicon');
var environment = config.get('environment');

exports.home_view = function(req, res, next){
    console.log("Home dashboard");
    res.render('backend_view/home')
    //res.render('backend_view/login',{title:title,base_url:base_url,favicon:favicon});
}