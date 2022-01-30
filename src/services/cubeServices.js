const fs = require('fs/promises');
const path = require('path');

const database = require('../config/database');

const Cube = require('../models/Cube');


const getAll = () => {
    return database.cubes.slice()
};

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    database.cubes.push(cube);

    const result = JSON.stringify(database, '', 2);

    return fs.writeFile('./src/config/database.json', result);
};

const getById = (id) => database.cubes.find(x => x.id == id);

const search = (text, from, to) => {
    let result = database.cubes.slice();

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