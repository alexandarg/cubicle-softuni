const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');


const getAll = () => Cube.find({}).lean();

const getById = (id) => Cube.findById(id).populate('accessories').lean();

const create = (name, description, imageUrl, difficulty) => {
    return Cube.create({
        name,
        description,
        imageUrl,
        difficulty,
    });
}

const update = (cubeId, cube) => Cube.findByIdAndUpdate(cubeId, cube, { runValidators: true });

const deleteById = (cubeId) => Cube.findByIdAndDelete(cubeId); 

const attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);
    
    cube.accessories.push(accessory);
    
    return cube.save();
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
const cubeServices = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    attachAccessory,
    search,
}

module.exports = cubeServices;