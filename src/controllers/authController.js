const router = require('express').Router();

const authServices = require('../services/authServices');

router.get('/register', (req, res) => {
    res.render('auth/register')
});

router.post('/register', (req, res) => {
    try {
        const { username, password, repeatPassword } = req.body;

        authServices.register(username, password, repeatPassword);

        res.redirect('/auth/login');
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await authServices.login(username, password);

    if (!user) {
        res.redirect('/404');
    }

    res.redirect('/');
});

module.exports = router;