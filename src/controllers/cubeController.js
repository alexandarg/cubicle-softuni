const express = require('express');

const router = express.Router();

const renderCreatePage = (req, res) => {
    res.render('create');
}

router.get('/create', renderCreatePage);

module.exports = router;