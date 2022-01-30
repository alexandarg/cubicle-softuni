const express = require('express');

const homeController = require('../controllers/homeController');
const cubeController = require('../controllers/cubeController');
const accessoryController = require('../controllers/accessoryController');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);
router.use('/about', (req, res) => {
    res.render('about');
})
router.use('*', (req, res) => {
    res.render('404');
})

module.exports = router;