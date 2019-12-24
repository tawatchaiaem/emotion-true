var express = require('express');
var router = express.Router();
var config = require('config/');
var base_url = config.get('base_url');

/* GET login page */
router.get('/',function(req,res,next){
    console.log(base_url)
    res.render('backend_view/login',{base_url:base_url});
});
module.exports = router;