
const express = require('express');
const router = express.Router();
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


  router.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/users");
    }
    res.render("register");
  });

  router.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/users");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  router.get("/users", isAuthenticated, (req, res) => {
    User.find().sort({ _id:-1 })
      .then(function (dbUser) {
        res.json(dbUser);
      })
  });

  module.exports = router;