const passport = require('../config/passport');
const express = require('express');
const router = express.Router();
const user = require("../models");
// router.post("/api/login", passport.authenticate("local", 
// {successRedirect: '/home',
// failureRedirect: '/register' 
// }));
// router.post('/userlogin',
//   passport.authenticate('local', {
//     successRedirect: '/home',
//     failureRedirect: '/register',
//     successFlash: 'Welcome!'
//   }))

// router.post('/api/login', passport.authenticate('local'), (req, res) => {
//   if (req.user) {
//     res.send({user: req.user});
//   } else {
//     res.status(401).send({error: 'Error logging in!'});
//   }
// });

// router.get('/api/users/me',
//   passport.authenticate('basic', { session: false }),
//   function(req, res, user) {
//     res.json({ id: req.user._id, username: req.user.username });
//   });



module.exports = router;