const passport = require('passport')
const LocalStrategy = require('./localStrategy');
const db = require('../models');

// passport.serializeUser(function(user, cb) {
// 	console.log("serialized user ")
// 	console.log(user.id);
//     cb(null, user.id);
// });

// passport.deserializeUser(function(id, cb) {
// 	console.log("deserialized user ")
// 	console.log(id)
// 	cb(null, id);
// });

// serialized user
passport.serializeUser((id, cb) => {
	console.log('=== serialize  ===')
	db.User.findOne({_id: id}, 'username',
	(err, user) =>{
		console.log(user);
		cb(null, user);
	})
});
// deserialized user
passport.deserializeUser((id, cb) => {
	db.User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======')
			console.log(user)
			cb(null, user)
		}
	)
})
// ==== Register Strategies ====
passport.use(LocalStrategy)
module.exports = passport