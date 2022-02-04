const router = require('express').Router();

const { TOKEN_COOKIE_NAME } = require('../constants');
const authServices = require('../services/authServices');

router.get('/register', (req, res) => {
    res.render('auth/register')
});

router.post('/register', async (req, res) => {
    try {
        const { username, password, repeatPassword } = req.body;

        await authServices.register(username, password, repeatPassword);

        res.redirect('/auth/login');
    } catch (error) {
        const errors = Object.keys(error.errors).map(x => error.errors[x].message);

        res.locals.errors = errors;
        res.status(400).render('auth/register',);
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

    const token = await authServices.createToken(user);

    res.cookie(TOKEN_COOKIE_NAME, token, {
        httpOnly: true,
    });

    res.redirect('/');
});

module.exports = router;