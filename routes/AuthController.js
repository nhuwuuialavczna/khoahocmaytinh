var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
function checkLogin(ds, us) {
    for (var i = 0; i < ds.length; i++) {
        var v = ds[i];
        if (v.ip == us.ip && v.latitude == us.latitude && v.longitude == us.longitude) {
            return true;
        }
    }
    return false;
}

router.get('/login', function (req, res, next) {
    var dsUser = [{
        ip: '171.253.139.75',
        region_code: 'SG',
        latitude: 10.8142,
        longitude: 106.6438
    }, {
        ip: '171.253.46.38',
        region_code: 'SG',
        latitude: 10.8142,
        longitude: 106.6438
    }];
    var data = req.query.data;

    var us = JSON.parse(data);
    if (checkLogin(dsUser, us)) {
        req.session.tk = us;
        res.json({data: 'ok'});
    } else {
        res.json({data: 'false'});
    }
});

module.exports = router;
