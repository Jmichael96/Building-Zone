const db = require('../models');
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	function(username, password, done) {
		db.User.findOne({ 'username': username }, (err, dbUser) => {
			if (err) {
				return done(err)
			}
			if (!dbUser) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!dbUser.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, dbUser)
		})
	}
)

module.exports = strategy