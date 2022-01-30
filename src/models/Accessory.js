const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\//i, 'Entered image url is invalid!The url should start with http/https'],
    },
    description: {
        type: String,
        required: true,
        maxlength: 200,
    }
})

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;