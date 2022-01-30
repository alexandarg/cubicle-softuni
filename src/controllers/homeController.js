const express = require('express');

const cubeServices = require('../services/cubeServices');

const router = express.Router();

const renderHome = async (req, res) => {
    const cubes = await cubeServices.getAll();

    res.render('index', { cubes });
}

const searchCube = async (req, res) => {
    const { search, from, to } = req.query;

    const cubes = await cubeServices.search(search, from, to);

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