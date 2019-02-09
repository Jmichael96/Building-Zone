let express = require('express');
let router = express.Router();
let User = require("../models/User");
let passport = require("../config/passport");
const mongoose = require("mongoose");

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
    return res.json({ user: req.user })
  } else {
    return res.json({ user: null })
  }
})
// post route for login
// router.post(
//   '/login',
//   (req, res, next) =>{
//     console.log(req.body)
//     console.log('================')
//     next()
//   },
//   passport.authenticate('local'),
//   (req, res) => {
//     console.log('POST to /login')
//     const user = JSON.parse(JSON.stringify(req.user)) // hack
//     const cleanUser = Object.assign({}, user)
//     if (cleanUser.local) {
//       console.log(`Deleting ${cleanUser.local.password}`)
//       delete cleanUser.local.password
//     }
//     res.json({ user: cleanUser })
//   });

// post route for signup
router.post('/register', (req, res) => {
  const { username, password } = req.body
	// ADD VALIDATION
	User.findOne({ 'username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}const user = new User({
			'_id': new mongoose.Types.ObjectId(),
			'username': username,
			'password': password
		})
		user.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
		
	})
})
router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login"
}));

// old route for registering
// router.post('/register', (req, res) => {
//   // TODO: Convert so that it is saving data coming from the view
//   const dataCheck = req.body.email && req.body.password;

//   if (dataCheck) {
//       const userData = {
//           email: req.body.email,
//           password: req.body.password,
//       }
//       console.log(dataCheck);

//       db.User.create(userData, (err, user) => {
//           if (err) throw err;
//           else {
//             console.log(user + " user created hooray");
//               res.redirect('/login');
//           }
//       });
//   } else {
//     return res.json({
//       error: `Sorry, already a user with the email: ${email}`
//     })
//   }
// });


module.exports = router;