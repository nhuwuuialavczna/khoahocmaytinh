var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var home = require('./routes/HomeController');
var auth = require('./routes/AuthController');
var cpds = require('./routes/CPDSController');
var ai = require('./routes/AIController');
var atm = require('./routes/ATMController');
var lt = require('./routes/LTController');
var dsa = require('./routes/DSAController');
var ltdt = require('./routes/LTDTController');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'keyboard cat', cookie: {maxAge: 60000}}));

app.use('/', home);
app.use('/auth', auth);
app.use('/', cpds);
app.use('/', ai);
app.use('/', atm);
app.use('/', lt);
app.use('/', dsa);
app.use('/', ltdt);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(process.env.PORT || '3000');

module.exports = app;
