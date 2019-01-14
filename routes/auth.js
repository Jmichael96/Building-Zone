// const passport = require('passport');
// const settings = require('../config/settings');
// require('../config/passport')(passport);
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const router = express.Router();
// const User = require('../models/User.js');

// router.post('/register', (req, res) => {

//   // TODO: Convert so that it is saving data coming from the view
//   const dataCheck = req.body.username && req.body.password && req.body.email;

//   if (dataCheck) {
//       const userData = {
//           username: req.body.username,
//           password: req.body.password,
//           email: req.body.email
//       }
//       console.log(dataCheck);
  
//       User.create(userData, (err, user) => {
//           if (err) throw err;
//           else {
//             console.log(user + " user created hooray");
//               res.redirect('/login');
//           }
//       });
//   } else {
//       res.send('Missing parameteres');
//   }
// });
// router.get("/users", (req, res) => {
//   User.find().sort({ _id:-1 })
//     .then(function (dbUser) {
//       res.json(dbUser);
//     })
// });
// module.exports = router;