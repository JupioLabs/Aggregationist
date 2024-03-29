﻿'use strict';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var flash = require('connect-flash');

var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var passport = require('passport');

var menuItems = require('./config/menuItems');

// Set up database conenctions



var mongoose = require('mongoose');
mongoose.connect('mongodb://ag_admin:8HsZBHSsBFy9q7p7@ds056419.mlab.com:56419/aggregationist');

var store = new MongoDBStore(
    {
        uri: 'mongodb://ag_admin:8HsZBHSsBFy9q7p7@ds056419.mlab.com:56419/aggregationist',
        collection: 'Sessions'
    }
);
store.on('error', function (error) {
    console.log(error);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var api = require('./routes/api/api');
app.use('/api', api);

// Auth initialization
app.use(session({
    secret: 'benderisgreatrememberme',
    cookie: { maxAge: 7200000 },
    store: store,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Initialize passport
require('./config/passport/init')(passport);

var routes = require('./routes/index')(passport);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            menuItems: menuItems,
            user: req.user
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        menuItems: menuItems,
        user: req.user
    });
});


module.exports = app;
