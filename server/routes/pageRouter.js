const express = require('express');
const router = express.Router();
const pageController = require('../controller/pageController');

//Routers
router.route('/').get(pageController.getIndexPage);
router.route('/profile').get(pageController.getProfilePage);


//exports router
module.exports = router;