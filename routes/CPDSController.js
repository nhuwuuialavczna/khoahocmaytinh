var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/cpds', function (req, res, next) {
    var fileName = req.query.name;
    var data = fs.readFileSync('docs\\CompilerDesign\\' + fileName + '.md');
    res.render('reviews', {title: data});
});


module.exports = router;