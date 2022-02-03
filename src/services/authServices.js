const User = require('../models/User');

const register = (username, password, rePass) => {
    User.create({
        username, 
        password, 
    });
}

const authServices = {
    register,
}

module.exports = authServices;