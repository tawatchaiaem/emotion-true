var express = require('express')
var router = express.Router()
var config = require('../../config/config');

/* GET login page */
router.get('/',function(req,res,next){
    console.log(process.env.NODE_ENV);
    res.render('backend_view/login');
})
module.exports = router