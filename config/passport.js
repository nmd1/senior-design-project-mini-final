// config/passport.js

// load the google oauth
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the user model from mongo
var User       = require('../app/models/user');

// load the auth variables
var configAuth = require('./auth');

module.exports = function(passport) {

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // Google login with passport
  passport.use(new GoogleStrategy({

      clientID        : configAuth.googleAuth.clientID,
      clientSecret    : configAuth.googleAuth.clientSecret,
      callbackURL     : configAuth.googleAuth.callbackURL,

    },
    function(token, refreshToken, profile, done) {

      // make the code asynchronous
      // User.findOne won't fire until we have all our data back from Google
      process.nextTick(function() {

        // try to find the user based on their google id
        User.findOne({ 'google.id' : profile.id }, function(err, user) {
          if (err)
            return done(err);

          if (user) {

            // if a user is found, log them in
            return done(null, user);
          } else {
            // if the user isnt in our database, create a new user
            var newUser          = new User();

            // set all of the relevant information
            newUser.google.id    = profile.id;
            newUser.google.token = token;
            newUser.google.name  = profile.displayName;
            newUser.google.email = profile.emails[0].value; // pull the first email

            // generate random data for the user when they sign up (simulation of sensor)
            newUser.data.humidity = Array.from({length: 7}, () => Math.floor(Math.random() * 20)); // generate random humidity
            newUser.data.temp     = Array.from({length: 7}, () => Math.floor(Math.random() * (85 - 65) + 65)); // generate random temp

            newUser.data1.humidity = Array.from({length: 7}, () => Math.floor(Math.random() * 20)); // generate random humidity
            newUser.data1.temp     = Array.from({length: 7}, () => Math.floor(Math.random() * (85 - 65) + 65)); // generate random temp

            newUser.data2.humidity = Array.from({length: 7}, () => Math.floor(Math.random() * 20)); // generate random humidity
            newUser.data2.temp     = Array.from({length: 7}, () => Math.floor(Math.random() * (85 - 65) + 65)); // generate random temp

            // save the user
            newUser.save(function(err) {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      });

    }));

};