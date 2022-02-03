const jwt = require('jsonwebtoken');

const jwtSign = function (payload, secret) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, function(err, token) {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        })
    })
}

module.exports = { jwtSign };