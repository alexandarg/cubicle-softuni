const errorHandler = (error, req, res, next) => {
    if (error) {
        res.locals.errors = [error];

        console.log(error);
        res.status(404).render('404')
    }
}

module.exports = errorHandler;