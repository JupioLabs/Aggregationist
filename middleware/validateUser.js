var User = require('../models/local/user.js');
var bcrypt = require('bcrypt-nodejs');

module.exports = function (req, res, next) {
    // Get all values from request
    let email = req.body.email,
        password = req.body.password,
        vPassword = req.body.vPassword,
        firstName = req.body.firstName,
        lastName = req.body.lastName;

    // perform data integrity checks
    let passwordVerified = password.length >= 8,
        passwordsMatch = password === vPassword,
        firstNameVerified = firstName.length > 1,
        lastNameVerified = lastName.length > 1,
        dataIntegrityVerified = true;

    // Send appropriate error messages

    if (!passwordVerified) {
        req.flash('registerMessage', 'Password is too short, it must be at least 8 characters long.');
        dataIntegrityVerified = false;
    }
    if (!passwordsMatch) {
        req.flash('registerMessage', 'Passwords don\'t match.');
        dataIntegrityVerified = false;
    }
    if (!firstNameVerified) {
        req.flash('registerMessage', 'First Name is required.');
        dataIntegrityVerified = false;
    }
    if (!emailVerified) {
        req.flash('registerMessage', 'Last Name is required.');
        dataIntegrityVerified = false;
    }

    if (dataIntegrityVerified) {
        User.find({ email: email }).then(
            function (users) {
                if (users.length > 0) {
                    req.flash('registerMessage', 'This email cannot be used, if you have already signed up please contact your administrator to reset your password.');
                    return res.redirect('/auth/register');
                }
                else {
                    return next();
                }
            },
            function (err) {
                throw err;
            }
        );
    }
    else {
        // Validation failed
        return res.redirect('/auth/register');
    }

}