var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/ai', function (req, res, next) {
    var fileName = req.query.name;
    var data = fs.readFileSync('docs\\AI\\' + fileName + '.md');
    res.render('reviews', {title: data});
});

module.exports = router;