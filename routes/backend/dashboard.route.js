var express = require('express');
var router = express.Router();
var dashboard_controller = require('../../controllers/dashboard.controller');

/** GET dashboard home */
router.get('/home',dashboard_controller.home_view)
module.exports = router;