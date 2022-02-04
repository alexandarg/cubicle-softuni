const express = require('express');

const cubeServices = require('../services/cubeServices');

const cubeAccessoryController = require('../controllers/cubeAccessoryController');

const router = express.Router();

const getCreateCubePage = (req, res) => {
    res.render('cube/create')
};

const createCube = async (req, res) => {
    const { name, description, imageUrl, difficulty } = req.body;

    try {
        await cubeServices.create(name, description, imageUrl, difficulty);

        console.log(`${name} with difficulty level ${difficulty} was added to the database successfully`);

        res.redirect('/');
    } catch (error) {
        res.status(400).send(error.message).end();
    }

}

const cubeDetails = async (req, res) => {
    const cube = await cubeServices.getById(req.params.cubeId);

    res.render('cube/details', { ...cube });
}

const getEditCubePage = async (req, res) => {
    const cube = await cubeServices.getById(req.params.cubeId);

    res.render('cube/edit', { ...cube });
};

const postEditCubePage = async (req, res) => {
    const cubeId = req.params.cubeId;
    const { name, description, imageUrl, difficulty } = req.body;

    await cubeServices.update(cubeId, { name, description, imageUrl, difficulty });

    res.redirect(`/cube/${cubeId}`);
};

const getDeleteCubePage = async (req, res) => {
    const cube = await cubeServices.getById(req.params.cubeId);

    res.render('cube/delete', { ...cube });
};
router.get('/create', getCreateCubePage);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);
router.get('/:cubeId/edit', getEditCubePage)
router.post('/:cubeId/edit', postEditCubePage)
router.get('/:cubeId/delete', getDeleteCubePage)
router.use('/:cubeId/accessory', cubeAccessoryController);

module.exports = router;