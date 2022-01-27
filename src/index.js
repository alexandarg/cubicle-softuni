const env = process.env.NODE_ENV || 'development';

const config = require('./config/confing')[env];
const app = require('express')();

app.all('/', (req, res) => {
    res.write('It\'s working!');
    res.end();
})

app.listen(config.port, console.log(`Server is runing on http://localhost:${config.port}...`));