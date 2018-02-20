var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/dsa', function (req, res, next) {
    var fileName = req.query.name;
    var data = fs.readFileSync('docs\\CauTrucDuLieuVaGiaiThuat\\' + fileName + '.md');
    res.render('reviews', {title: data});
});


module.exports = router;