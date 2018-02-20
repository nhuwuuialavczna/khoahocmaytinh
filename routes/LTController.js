var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/lt', function (req, res, next) {
    var fileName = req.query.name;
    var data = fs.readFileSync('docs\\LogicToan\\' + fileName + '.md');
    res.render('reviews', {title: data});
});


module.exports = router;