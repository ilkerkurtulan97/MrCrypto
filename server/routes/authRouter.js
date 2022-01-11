const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

//Routers
router.route('/register').post(authController.register);
router.route('/login').post(authController.loginUser);

//exports router
module.exports = router;