var express = require('express');
var router = express.Router();
var config = require('config/');
let vat = config.get('vat');

/* GET login page */
router.get('/',function(req,res,next){
    
    res.render('backend_view/login',{env:process.env.NODE_ENV,vat:vat});
});
module.exports = router;