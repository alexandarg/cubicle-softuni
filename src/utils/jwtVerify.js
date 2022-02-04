const jwt = require('jsonwebtoken');

const jwtVerify = function (token, secret) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, function (err, decodedToken) {
            if (err) {
                reject(err);
            } else {
                resolve(decodedToken);
            }
        })
    })
}

module.exports = jwtVerify;