var User = require('../../models/local/user.js');
var bcrypt = require('bcrypt-nodejs');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    var isValidPassword = function (user, password) {
        return bcrypt.compareSync(password, user.password);
    }

    passport.use('login', new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    function (req, email, password, done) {
        User.findOne({ 'email': email },
        function (err, user) {
            if (err)
                return done(err);
            if (!user) {
                return done(null, false, req.flash('message', 'Login failed, check your email and password for typos.'));
            }
            else {
                if (!isValidPassword(user, password)) {
                    return done(null, false, req.flash('message', 'Login failed, check your email and password for typos.'));
                }
            }

            return done(null, user);
        });
    }));
}