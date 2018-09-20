// app/models/user.js
// load mongo
var mongoose = require('mongoose');

// define the schema for our user
// the user will have humidity and temp data over time as well as google auth tokens given by the api
var userSchema = mongoose.Schema({

  data             : {
    humidity     : [Number],
    temp         : [Number]
  },
  data1           : {
    humidity     : [Number],
    temp         : [Number]
  },
  data2           : {
    humidity     : [Number],
    temp         : [Number]
  },
  google           : {
    id           : String,
    token        : String,
    email        : String,
    name         : String
  }

});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
