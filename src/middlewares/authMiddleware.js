const { TOKEN_COOKIE_NAME, SECRET } = require('../constants');

const jwtVerify = require('../utils/jwtVerify');

const auth = function (req, res, next) {
    const token = req.cookies[TOKEN_COOKIE_NAME];

    if (!token) {
        return next();
    }

    jwtVerify(token, SECRET)
        .then((decodedToken) => {
            req.user = decodedToken;
            res.locals.user = decodedToken;
            next();
        })
        .catch((err) => {
            console.log(err);
            res.status(401).redirect('/auth/login')
        })
}

module.exports = {
    auth
}