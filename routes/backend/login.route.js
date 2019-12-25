var express = require('express');
var router = express.Router();
var login_controller = require('../../controllers/login.controller')

/* GET login page */
router.get('/login',login_controller.login_view);
router.post('/auth',login_controller.login_auth);
module.exports = router;