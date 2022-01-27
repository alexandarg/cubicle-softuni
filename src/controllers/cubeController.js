const express = require('express');

const cubeServices = require('../services/cubeServices');

const router = express.Router();

const renderCreateCubePage = (req, res) => {
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

router.get('/create', renderCreateCubePage);
router.post('/create', createCube);


module.exports = router;