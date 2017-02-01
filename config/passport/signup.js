// DEPRECATED - DO NOT USE
var User = require('../../models/local/user.js');
var bcrypt = require('bcrypt-nodejs');
var LocalStrategy = require('passport-local').Strategy;


module.exports = function (passport) {
    passport.use('signup', new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
        function (req, email, password, done) {
        findOrCreateUser = function () {
            var createHash = function (password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
            }

            if (email.toLowerCase().includes("@moneris.com")) {
                User.find({ 'email': email }, function (err, user) {
                    if (err)
                        return done(err);
                    if (user.length > 0) {
                        return done(null, false, req.flash('registerMessage', 'This email cannot be used to sign up, it may already be in use or not be allowed. Try again with a different email'));
                    }
                    else {
                        var newUser = new User();

                        newUser.firstName = req.body.firstName;
                        newUser.lastName = req.body.lastName;
                        newUser.email = email;
                        newUser.registerDate = Date.now();
                        newUser.approved = true;
                        newUser.userType = 'user';
                        newUser.password = createHash(password);

                        newUser.save(function (err) {
                            if (err) {
                                throw err;
                            }
                            return done(null, user);
                        })
                    }    
                });
            }
            else {
                return done(null, false, req.flash('registerMessage', 'This email cannot be used to sign up, it may already be in use or not be allowed. try again with a different email'));
            }
        }
        process.nextTick(findOrCreateUser);
    }));
}