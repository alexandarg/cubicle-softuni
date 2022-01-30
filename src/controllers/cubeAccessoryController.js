const router = require('express').Router({mergeParams: true});

router.get('/add', async (req, res) => {
    res.render('cube/accessory/add');
})

module.exports = router;