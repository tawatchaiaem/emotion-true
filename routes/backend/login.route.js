var express = require('express');
var router = express.Router();
var config = require('config/');
var base_url = config.get('base_url');
var favicon = config.get('favicon');
var environment = config.get('environment');
/* GET login page */
router.get('/',function(req,res,next){
    console.log(environment)
    var title;
    if(environment == 'testing'){
        title = "test emontion true";
    }else{
        title = "login emotion true";
    }
    res.render('backend_view/login',{title:title,base_url:base_url,favicon:favicon});
});
module.exports = router;