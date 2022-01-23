const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

//Registering user
router.route('/register').post(authController.register);
//Authenticating user login
router.route('/login').post(authController.loginWithJwt);

//exports router
module.exports = router;