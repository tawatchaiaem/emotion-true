var express = require('express');
var router = express.Router();
var register_controller = require('../../controllers/register.controller')

router.get('/',register_controller.register_view);

module.exports = router
