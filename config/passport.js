var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");
// // Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
    function(username, password, done) {
        // When a user tries to sign in this code runs
        db.User.findOne({
            where: {
                username: username
            },
            raw: true
        }).then(function(dbUser) {
            // If there"s no user with the given email
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect username."
                });
            }
            // If there is a user with the given email, but the password the user gives us is incorrect
            if (dbUser.password !== password) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            // If none of the above, return the user
            console.log("Congrats");
            return done(null, dbUser);
        });
    }
));
  passport.serializeUser(function(user, done) {
    console.log('Serializing: ', user);
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    console.log('Deserializing: ', id);
    db.User.findById(id, function (err, user) {
      done(err, user);
    });
  });


  module.exports = passport;