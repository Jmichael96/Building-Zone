const passport = require('passport')
const LocalStrategy = require('./localStrategy');
const db = require('../models');
// serialized user
passport.serializeUser((id, done) => {
	console.log('=== serialize  ===')
	db.User.findOne({_id: id}, 'firstname lastname favoriteAnimal username',
	(err, user) =>{
		console.log(user);
		done(null, user);
	})
});
// deserialized user
passport.deserializeUser((id, done) => {
	db.User.findOne(
		{ _id: id },
		'firstname lastname favoriteAnimal username ',
		(err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======')
			console.log(user)
			done(null, user)
		}
	)
})
// ==== Register Strategies ====
passport.use(LocalStrategy)
module.exports = passport