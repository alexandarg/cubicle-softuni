const router = require('express').Router({ mergeParams: true });

const cubeServices = require('../services/cubeServices');
const accessoryServices = require('../services/accessoryServices');

router.get('/add', async (req, res) => {
    const cube = await cubeServices.getById(req.params.cubeId);
    const accessories = await accessoryServices.getRemaining(cube.accessories.map(x => x._id));

    res.render('cube/accessory/add', { ...cube, accessories });
})

router.post('/add', async (req, res) => {
    await cubeServices.attachAccessory(req.params.cubeId, req.body.accessory);
    
    res.redirect(`/cube/${req.params.cubeId}`);
})

module.exports = router;