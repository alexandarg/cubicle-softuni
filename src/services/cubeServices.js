const Cube = require('../models/Cube');


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

const cubeServices = {
    getAll,
    create,
    getById,
    search,
}

module.exports = cubeServices;