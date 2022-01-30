const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 200,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\//i, 'Entered image url is invalid!The url should start with http/https'],
    },
})

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;