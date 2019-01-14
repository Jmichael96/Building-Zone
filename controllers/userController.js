const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
let passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// router.post("/api/login", passport.authenticate("local"), function(req, res) {

//   res.json("/users");
// });
// router.get("/", function(req, res) {
//   // If the user already has an account send them to the members page
//   if (req.user) {
//     res.redirect("/users");
//   }
//   res.render("register");
// });
// router.get("/login", function(req, res) {
//   // If the user already has an account send them to the members page
//   if (req.user) {
//     res.redirect("/home");
//   }
//   res.render("login");
// });
router.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/users");
  }
  res.render("login");
});

// router.get("/home", isAuthenticated, function(req, res) {
//   if(req.isAuthenticated()) {
//     console.log('user logged in', req.user);
//     res.render("home");
//     next();
// }
// else {
//    console.log('user not logged in');
// }
// });
// router.post("/api/login", passport.authenticate("local"), function(req, res) {

//   res.json("/users");
// });
// router.get("/login", function (req, res) {
//   res.render("login");
// });

router.post('/register', (req, res) => {
  // TODO: Convert so that it is saving data coming from the view
  const dataCheck = req.body.username && req.body.password && req.body.email;

  if (dataCheck) {
      const userData = {
          username: req.body.username,
          password: req.body.password,
          email: req.body.email
      }
      console.log(dataCheck);
  
      User.create(userData, (err, user) => {
          if (err) throw err;
          else {
            console.log(user + " user created hooray");
              res.redirect('/login');
          }
      });
  } else {
      res.send('Missing parameteres');
  }
});
router.get("/users", (req, res) => {
  User.find().sort({ _id:-1 })
    .then(function (dbUser) {
      res.json(dbUser);
    })
});
module.exports = router;