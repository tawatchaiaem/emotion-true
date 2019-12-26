var config = require('config');
var base_url = config.get('base_url');
var favicon = config.get('favicon');
var environment = config.get('environment');
var User = require('../models/user.model')
var bcrypt = require('bcrypt')
const saltRounds = 10

exports.register_view = function(req, res, next){
    var title;
    if(environment == 'testing'){
        title = "test emontion true register ";
    }else{
        title = "register emotion true ";
    }
    res.render('backend_view/register',{title:title,base_url:base_url,favicon:favicon});
}

exports.register_create = function(req, res, next){

    var username = req.body.username;
    var password = req.body.password;
 
    bcrypt.hash(password,saltRounds, function(err, hash){
        var newuser = new User();
        
        if(err){
            console.log(err)
        }
        password =  hash     

        newuser.username = username;
        newuser.password = hash;
        
        newuser.save(function(err, saveUser){
            if(err){
                console.log(err)
                res.render('backend_view/register',{title:title,base_url:base_url,favicon:favicon});
                //return res.status(500).send()
            }
            
            return res.status(200).send()
        })
    })
    
    


}