const User = require('../models/User');
const { SECRET } = require('../constants');
const { jwtSign } = require('../utils/jwtSign');

const register = (username, password, repeatPassword) => User.create({username, password, repeatPassword });

const login = (username, password) => {
    return User.findOne({username})
        .then(user => Promise.all([user.validatePassword(password), user]))
        .then(([isValid, user]) => {
            if (isValid) {
                return user;
            } else {
                throw { message: 'Cannot find username or password'}
            }
        })
        .catch(() => null);
}

const createToken = (user) => {
    let payload = {
        _id: user._id,
        username: user.username,
    }

    console.log('Secret: ', SECRET);
    return jwtSign(payload, SECRET);
}

const authServices = {
    register,
    login,
    createToken,
}

module.exports = authServices;