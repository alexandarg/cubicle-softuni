const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: [true, 'Username should be unique!'],
        validate: [/^[A-Za-z0-9]+$/, 'Username should consists only of english letters and numbers!'],
        minlength: [5, 'Username should be at least 5 characters long!'],
        maxlength: [12, 'Username can be only 12 characters long!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        validate: [/^[A-Za-z0-9]+$/, 'Password should consists only of english letters and numbers!'],
        minlength: [8, 'Username should be at least 8 characters long!'],
    }
})

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;

            next();
        })
})

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
})

userSchema.virtual('repeatPassword')
    .set(function (v) {
        if (v !== this.password) {
            throw new Error('Passowrd don\'t match');
        }
    })

const User = mongoose.model('User', userSchema);

module.exports = User;