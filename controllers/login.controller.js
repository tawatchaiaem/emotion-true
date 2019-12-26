var config = require('config');
var base_url = config.get('base_url');
var favicon = config.get('favicon');
var environment = config.get('environment');
var User = require('../models/user.model')
var bcrypt = require('bcrypt')

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
    //res.redirect('../dashboard/home')
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username:username}, function(err, users){
        if(err){
            console.log('************** login user err *******************')
            console.log(err);
            return res.status(500).send();
        }

        if(!users){
            return res.status(404).send();
        }
        console.log(password);
        console.log(users.password);
        bcrypt.compare(password,users.password, function(err,result){
            if(err){
                console.log('************** login pass err *******************')
                return res.status(500).send()
            }
            console.log(result)
            // if(result == false){
            //     res.send('Incorrect password'); 
            // }
        })


        return res.status(200).send();
    })

} 