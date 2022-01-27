const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

const express = require('express');
const path = require('path');
const initHandlebars = require('./config/handlebars');

const app = express();
initHandlebars(app);

app.use(express.static(path.resolve(__dirname, './public')))

app.all('/', (req, res) => {
    res.render('index');
})

app.listen(config.port, console.log(`Server is runing on http://localhost:${config.port}...`));