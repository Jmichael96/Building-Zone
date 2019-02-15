let express = require('express');
let router = express.Router();
let User = require("../models/User");
let passport = require("../config/passport");
const mongoose = require("mongoose");
const sessionChecker = require("../config/middleware/sessionChecker");

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
// route for when user logs in
router.post("/login", passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/login"
}));

// router.route("/login")
// .get(sessionChecker, (req, res) =>{
// 	res.render("login");
// })
// .post((req, res) =>{
// 	const { username, password } = req.body;

// 	User.findOne({where: { username }})
// 	.then(function(user){
// 		if(!user){
// 			res.redirect("/login");
// 		}
// 		else if (!user.validatePassword(password)){
// 			res.redirect("/login");
// 		}
// 		else{
// 			req.session.user = user.dataValues;
// 			res.redirect("/home");
// 		};
// 	});
// });

// post route for signup
// router.post('/register', (req, res) => {
  // const { username, password } = req.body
	// // ADD VALIDATION
	// User.findOne({ 'username': username }, (err, userMatch) => {
	// 	if (userMatch) {
	// 		return res.json({
	// 			error: `Sorry, already a user with the username: ${username}`
	// 		})
	// 	}const user = new User({
	// 		'_id': new mongoose.Types.ObjectId(),
	// 		'username': username,
	// 		'password': password
	// 	})
	// 	user.save((err, savedUser) => {
	// 		if (err) return res.json(err)
	// 		return res.json(savedUser)
	// 	})
		
// 	})
// })
router.route("/register")
.get(sessionChecker, (req,res) =>{
	res.render("register");
})
.post((req,res) =>{
	const { username, password } = req.body;
	User.create({
		'_id': new mongoose.Types.ObjectId(),
		'username': username,
		'password': password,
	})
	.then(user =>{
		req.session.user = user.dataValues;
		res.redirect('/home');
	})
	.catch(err =>{
		res.redirect("/register");
	}) 
})

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