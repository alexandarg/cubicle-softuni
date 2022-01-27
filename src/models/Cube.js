const uniqid = require('uniqid');

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name,
        this.description = description,
        this.imageUrl = imageUrl,
        this.difficulty = difficulty
    }
}

module.exports = Cube;