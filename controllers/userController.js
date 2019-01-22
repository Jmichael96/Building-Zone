let express = require('express');
let router = express.Router();
let db = require("../models");
let passport = require("../config/passport");



router.get("/users", (req, res) => {
    db.User.find().sort({ _id:-1})
        .then(function (dbUser) {
            res.json(dbUser);
        });
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

router.post('/login',
  passport.authenticate('local', { 
    successRedirect: '/',  
    failureRedirect: '/users' }),
  function(req, res) {
    res.redirect('/success?username='+req.user.username);
  });


router.post('/register', (req, res) => {
  // TODO: Convert so that it is saving data coming from the view
  const dataCheck = req.body.username && req.body.password;

  if (dataCheck) {
      const userData = {
          username: req.body.username,
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