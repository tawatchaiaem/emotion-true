var config = require('config');
var base_url = config.get('base_url');
var favicon = config.get('favicon');
var environment = config.get('environment');

exports.register_view = function(req, res, next){
    var title;
    if(environment == 'testing'){
        title = "test emontion true register ";
    }else{
        title = "register emotion true ";
    }
    res.render('backend_view/register',{title:title,base_url:base_url,favicon:favicon});
}