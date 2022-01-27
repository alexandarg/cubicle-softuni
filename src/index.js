const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

const express = require('express');
const initHandlebars = require('./config/handlebars');
const path = require('path');
const routes = require('./config/routes');

const app = express();
initHandlebars(app);

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

app.listen(config.port, console.log(`Server is runing on http://localhost:${config.port}...`));