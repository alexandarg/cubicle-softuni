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

const getRemaining = (accessoryIds) => {
    return Accessory.find({_id: {$nin: accessoryIds}}).lean();
}

const accessoryServices = {
    getAll,
    getById,
    create,
    getRemaining,
}

module.exports = accessoryServices;