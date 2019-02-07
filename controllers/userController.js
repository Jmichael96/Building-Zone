let express = require('express');
let router = express.Router();
let db = require("../models");
let passport = require("../config/passport");



// router.get("/users", (req, res) => {
//     db.User.find().sort({ _id:-1})
//         .then(function (dbUser) {
//             res.json(dbUser);
//         });
// });
router.post("/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/users");
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
        username: req.user.username,
        id: req.user.id
      });
    }
  });
// router.get("/", function (req, res) {
//     console.log(req.user);
//     if (req.user) {
//             db.User.findOne({
//                 where: {
//                     id: req.user
//                 },
//                 raw: true,
//             })
//             .then(function (dbUser){
//                 res.render("index", {
//                     loginStatus: true,
//                     data: dbUser
//                 })
//             })
//         }
//         else{
//             if(!req.user){
//                 res.render("register");
//             }
//         }   
// });

// router.post('/login',
//   passport.authenticate('local', { 
//     successRedirect: '/',  
//     failureRedirect: '/users' }),
//   function(req, res) {
//     res.redirect('/success?username='+req.user.username);
//   });


router.post('/register', (req, res) => {
  // TODO: Convert so that it is saving data coming from the view
  const dataCheck = req.body.email && req.body.password;

  if (dataCheck) {
      const userData = {
          email: req.body.email,
          password: req.body.password,
      }
      console.log(dataCheck);
  
      db.User.create(userData, (err, user) => {
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


module.exports = router;