const express = require('express');

const cubeServices = require('../services/cubeServices');

const router = express.Router();

const getCreateCubePage = (req, res) => {
    res.render('create');
}

const createCube = async (req, res) => {
    const { name, description, imageUrl, difficulty } = req.body;

    try {
        await cubeServices.create(name, description, imageUrl, difficulty);

        console.log(`${name} with difficulty level ${difficulty} was added to the database successfully`);

        res.redirect('/');
    } catch (error) {
        res.status(400)
        res.send(error.message)
        res.end();
    }

}

const getCubeDetails = async (req, res) => {
    const cube = await cubeServices.getById(req.params.cubeId);

    res.render('details', { ...cube });
}

router.get('/create', getCreateCubePage);
router.post('/create', createCube);
router.get('/:cubeId', getCubeDetails)

module.exports = router;