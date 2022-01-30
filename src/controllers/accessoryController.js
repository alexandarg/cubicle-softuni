const router = require('express').Router();

const accessoryServices = require('../services/accessoryServices');

const createAccessory = async (req, res) => {
    const { name, description, imageUrl } = req.body;

    try {
        await accessoryServices.create(name, description, imageUrl);
        
        console.log(`${name} accessory has been successfully added to the database!`);

        res.redirect('/');
    } catch (error) {
        res.status(400);
        res.send(error.message);
        res.end();
    }
}

router.get('/create', (req, res) => {
    res.render('accessory/create');
})
router.post('/create', createAccessory);

module.exports = router;