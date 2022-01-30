const router = require('express').Router({ mergeParams: true });

const cubeServices = require('../services/cubeServices');

router.get('/add', async (req, res) => {
    const cube = await cubeServices.getById(req.params.cubeId);

    res.render('cube/accessory/add', { ...cube });
})

module.exports = router;