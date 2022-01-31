const router = require('express').Router({ mergeParams: true });

const cubeServices = require('../services/cubeServices');
const accessoryServices = require('../services/accessoryServices');

router.get('/add', async (req, res) => {
    const cube = await cubeServices.getById(req.params.cubeId);
    const accessories = await accessoryServices.getAll();

    res.render('cube/accessory/add', { ...cube, accessories });
})

module.exports = router;