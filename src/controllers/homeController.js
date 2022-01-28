const express = require('express');

const cubeServices = require('../services/cubeServices');

const router = express.Router();

const renderHome = (req, res) => {
    const cubes = cubeServices.getAll();

    res.render('index', { cubes });
}

const searchCube = (req, res) => {
    const { search, from, to } = req.query;

    const cubes = cubeServices.search(search, from, to);

    res.render('index', { 
        title: "SEARCH",
        search,
        from,
        to,
        cubes 
    });
}

router.get('/', renderHome);
router.get('/search', searchCube);

module.exports = router;