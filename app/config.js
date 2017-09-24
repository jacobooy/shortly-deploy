var mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/shortlydb';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongodb connection is open!');
});



// user.increments('id').primary();
// user.string('username', 100).unique();
// user.string('password', 100);

module.exports = db;
