const express = require('express');

const cubeServices = require('../services/cubeServices');

const router = express.Router();

const renderHome = (req, res) => {
    res.render('index');
}

router.get('/', renderHome);

module.exports = router;