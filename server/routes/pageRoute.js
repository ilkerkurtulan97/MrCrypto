const express = require('express');
const router = express.Router();
const pageController = require('../controller/pageController');


router.route('/login').get(pageController.getLoginPage);

module.exports = router