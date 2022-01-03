const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

//Routers
router.route('/login').get(loginController.getLoginPage);

//exports router
module.exports = router;