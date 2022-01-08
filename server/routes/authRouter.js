const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

//Routers
router.route('/register').post(authController.createUser);
router.route('/login').post(authController.login);

//exports router
module.exports = router;