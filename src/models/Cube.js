const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Cube name is required!'],
        minlength: [5, 'Cube name length should be at least 5 characters long!'],
        validate: [/^[A-Za-z0-9 ]+$/, 'Cube name should consist only of english letters digits and whitespaces!'],
    },
    description: {
        type: String,
        required: [true, 'Cube description is required!'],
        maxlength: [500, 'Cube description max lenght is 500 characters!'],
        minlength: [20, 'Cube descripition min lenght is 20 characters!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image url is required!'],
        validate: [/^https?:\/\//i, 'Entered image url is invalid! The url should start with http or https'],

    },
    difficulty: {
        type: Number,
        required: [true, 'Difficulty level is required'],
        min: 1,
        max: 6,
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory',
        }
    ],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
})

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;