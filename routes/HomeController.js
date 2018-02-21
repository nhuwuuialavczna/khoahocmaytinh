var express = require('express');
var router = express.Router();
var fs = require("fs");


router.get('/', function (req, res, next) {
    res.render('auth');
});

router.get('/index', function (req, res, next) {
    var us = req.session.tk;
    if (!us) {
        res.redirect('/');
    } else {
    res.render('index');
    }
});

module.exports = router;
