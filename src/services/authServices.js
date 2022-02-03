const User = require('../models/User');

const register = (username, password, rePass) => User.create({username, password });

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


const authServices = {
    register,
    login,
}

module.exports = authServices;