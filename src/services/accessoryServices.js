const Accessory = require('../models/Accessory');

const getAll = () => Accessory.find({}).lean();

const getById = (id) => Accessory.findById(id).lean();

const create = (name, description, imageUrl) => {
    return Accessory.create({
        name,
        description,
        imageUrl
    })
}

const accessoryServices = {
    getAll,
    getById,
    create
}

module.exports = accessoryServices;