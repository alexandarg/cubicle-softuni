const express = require('express');

const cubeServices = require('../services/cubeServices');

const router = express.Router();

const getCreateCubePage = (req, res) => {
    res.render('create');
}

const createCube = (req, res) => {
    const { name, description, imageUrl, difficulty } = req.body;

    cubeServices.create(name, description, imageUrl, difficulty)
        .then(() => {
            console.log('A new rubic cube has beed added to the database!');
        })
        .catch((err) => {
            console.log('Error:', err);
        })

    res.redirect('/');
}

const getCubeDetails = (req, res) => {
    const cube = cubeServices.getById(req.params.cubeId);
    res.render('details', { ...cube });
}

router.get('/create', getCreateCubePage);
router.post('/create', createCube);
router.get('/:cubeId', getCubeDetails)

module.exports = router;