const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

const express = require('express');
const initHandlebars = require('./config/handlebars');
const initDatabase = require('./config/database');
const path = require('path');
const routes = require('./config/routes');

const app = express();
initHandlebars(app);

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log(`Server is runing on http://localhost:${config.PORT}...`));
    })
    .catch((err) => {
        console.log('Application init failed due to unexpected error: ', err);
    })