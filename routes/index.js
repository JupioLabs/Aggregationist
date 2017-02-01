// routes/index.js
var express = require('express');
var router = express.Router();
var menuItems = require('../config/menuItems');
var User = require('../models/local/user');

var appSettings = {
    globalTitle: "Equator"
};


module.exports = function (passport) {

    // Routes with no login required
    router.use('/auth', require('./auth/index')(User, passport, menuItems));

    // Authentication Middleware, everything past this must be authenticated: order matters
    router.use('*', function (req, res, next) {
        // req.isAuthenticated() is a built-in passport function that returns
        // true/false depending on user authentication status
        if (req.isAuthenticated()) {
            next();
        }
        else {
            res.redirect('/auth');
        }
    });

    // Routes that require authentication

    router
        .get('/', function (req, res) {
            res.redirect('/dashboard');
        })
        .get('/dashboard', function (req, res) {
            res.render('index', {
                title: `Dashboard | ${appSettings.globalTitle}`,
                pageName: 'Dashboard',
                user: req.user,
                menuItems: menuItems
            });
        })
    return router;
}