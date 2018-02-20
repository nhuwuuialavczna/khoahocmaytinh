var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/a', function (req, res, next) {
    var data = fs.readFileSync('docs\\CompilerDesign\\C1_TimHieuSuBienDich.md');
    res.render('index', {title: data});
});

module.exports = router;