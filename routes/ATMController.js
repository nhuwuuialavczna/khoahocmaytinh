var express = require('express');
var router = express.Router();
var fs = require("fs");


/* GET home page. */
router.get('/atm', function (req, res, next) {
    var fileName = req.query.name;
    var data = fs.readFileSync('docs\\Atomata\\' + fileName + '.md');
    res.render('reviews', {title: data});
});


module.exports = router;