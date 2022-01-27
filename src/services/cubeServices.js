const fs = require('fs/promises');
const path = require('path');

const database = require('../config/database.json');

const Cube = require('../models/Cube');


const getAll = () => {
    return database.cubes.slice()
};

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube (name, description, imageUrl, difficulty);

    database.cubes.push(cube);

    const result = JSON.stringify(database, '', 2);

    return fs.writeFile('./src/config/database.json', result);
};

const cubeServices = {
    getAll,
    create,
}

module.exports = cubeServices;