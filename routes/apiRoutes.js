const passport = require('../config/passport');
const express = require('express');
const router = express.Router();

router.post("/api/login", passport.authenticate("local"), function(req, res) {

    res.json("/users");
  });

  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  router.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

module.exports = router;