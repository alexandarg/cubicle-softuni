const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

const app = require('express')();
require('./config/handlebars')(app);

app.all('/', (req, res) => {
    res.write('It\'s working!');
    res.end();
})

app.listen(config.port, console.log(`Server is runing on http://localhost:${config.port}...`));