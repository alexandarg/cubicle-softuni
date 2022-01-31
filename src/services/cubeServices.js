const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');


const getAll = () => Cube.find({}).lean();

const getById = (id) => Cube.findById(id).lean();

const create = (name, description, imageUrl, difficulty) => {
    return Cube.create({
        name,
        description,
        imageUrl,
        difficulty,
    });
}


const search = (text, from, to) => {
    let result = getAll();

    if (text) {
        result = result.filter(x => x.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    }

    if (from) {
        result = result.filter(x => x.difficulty >= from);
    }

    if (to) {
        result = result.filter(x => x.difficulty <= to);
    }

    return result
}

const attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    return cube.save();
}

const cubeServices = {
    getAll,
    create,
    getById,
    search,
    attachAccessory,
}

module.exports = cubeServices;