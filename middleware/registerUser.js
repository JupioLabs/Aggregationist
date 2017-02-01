var User = require('../models/local/user.js');
var bcrypt = require('bcrypt-nodejs');

function createHash (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

module.exports = function (req, res, next) {
    // Get all values from request
    let email = req.body.email,
        password = req.body.password,
        vPassword = req.body.vPassword,
        firstName = req.body.firstName,
        lastName = req.body.lastName;

    let usr = new User();

    usr.firstName = firstName;
    usr.lastName = lastName;
    usr.email = email;
    usr.password = createHash(password);
    usr.userType = "user";
    usr.approved = true;
    usr.registerDate = Date.now();

    usr.save().then(
        function (user) {
            req.flash('message', 'You have successfully registered. Please verify your account and log in to complete the registration process.');
            return next();
        },
        function (err) {
            throw err;
        }
    );
}