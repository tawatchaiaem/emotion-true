var express = require('express')
var router = express.Router()
//var config = require('config');

/* GET login page */
router.get('/',function(req,res,next){
    //console.log(config);
    res.render('backend_view/login');
})
module.exports = router