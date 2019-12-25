var config = require('config');
var base_url = config.get('base_url');
var favicon = config.get('favicon');
var environment = config.get('environment');
var userModel = require('../models/login.model')

exports.login_view = function(req,res,next){
  
    var title;
    if(environment == 'testing'){
        title = "test emontion true";
    }else{
        title = "login emotion true";
    }
    res.render('backend_view/login',{title:title,base_url:base_url,favicon:favicon});
}

exports.login_auth = function(req, res, next){
    console.log(req.body);
    //res.redirect('../dashboard/home')
} 