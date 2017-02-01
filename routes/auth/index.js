// routes/auth/index.js
var express = require('express');
var router = express.Router();
var appSettings = {
    globalTitle: "Equator"
};

// Registration Middlewares
var validateUser = require('../../middleware/validateUser');
var registerUser = require('../../middleware/registerUser');

module.exports = function (User, passport, menuItems) {
    // Middleware to check if use is authenticated
    router.use('/login', function (req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect('/');
        }
        else {
            next();
        }
    });
    router.use('/register', function (req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect('/');
        }
        else {
            next();
        }
    });
    router.use('/logout', function (req, res, next) {
        if (req.isAuthenticated()) {
            next();
        }
        else {
            res.redirect('/auth/login');
        }
    });

    // Routing paths

    router
        .get('/', function (req, res) {
            if (req.isAuthenticated()) {
                res.redirect('/');
            }
            else {
                res.redirect('/auth/login');
            }
        })

        // Login Page
        .get('/login', function (req, res) {
            let flashMessage = req.flash('message');
            res.render('auth/login', {
                flash: flashMessage,
                title: `Login | ${appSettings.globalTitle}`,
                pageName: 'Login',
                menuItems: menuItems
            });
        })
        .post('/login', passport.authenticate('login', {
            successRedirect: '/',
            failureRedirect: '/auth',
            failureFlash: true
        }))

        // Logout function
        .get('/logout', function (req, res) {
            req.logout();
            res.redirect('/');
        })

        // Register Page
        .get('/register', function (req, res) {
            let flashMessage = req.flash('registerMessage');
            res.render('auth/register', {
                flash: flashMessage,
                title: `Register | ${appSettings.globalTitle}`,
                pageName: 'Registration',
                menuItems: menuItems
            });
        })
        .post('/register', validateUser, registerUser, function (req, res) {
            // If the request makes it to this point, registration is successful.
            res.redirect('/auth');
        });
    
    return router;
}