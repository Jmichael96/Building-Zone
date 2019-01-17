
const express = require('express');
const router = express.Router();
let multer = require("multer");
let passport = require("../config/passport");
let user = require("../models");
// // Requiring our custom middleware for checking if a user is logged in
// MongoClient = require('mongodb').MongoClient
//   , ObjectId = require('mongodb').ObjectId
//   , fs = require('fs-extra')
//   // Your mongodb or mLabs connection string
//   , multer = require('multer')
//   , util = require('util')
//   , upload = multer({ limits: { fileSize: 2000000 }})


// // Default route http://localhost:3000/
// router.get('/image', function (req, res) {
//   res.render('img');
// });
// // Form POST action handler
// router.post('/uploadpicture', upload.single('picture'), function (req, res) {
//   MongoClient.connect(url, function (err, db) {
//     // read the img file from tmp in-memory location
//     var newImg = fs.readFileSync(req.file.path);
//     // encode the file as a base64 string.
//     var encImg = newImg.toString('base64');
//     // define your new document
//     var newItem = {
//       description: req.body.description,
//       contentType: req.file.mimetype,
//       size: req.file.size,
//       img: Buffer(encImg, 'base64')
//     };
//     db.collection('capstone')
//       .insert(newItem, function (err, result) {
//         if (err) { console.log(err); };
//         var newoid = new ObjectId(result.ops[0]._id);
//         fs.remove(req.file.path, function (err) {
//           if (err) { console.log(err) };
//           res.render('index', { title: 'Thanks for the Picture!' });
//         });

//         router.get("/", function (req, res) {
//           // If the user already has an account send them to the members page
//           if (req.user) {
//             res.redirect("/users");
//           }
//           res.render("register");
//         });
//       });
//   });
// });
// router.get("/login", function (req, res) {
//   // If the user already has an account send them to the members page
//   res.render("login");
// });
// router.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/home');
//   });
// router.post('/userlogin',
//   passport.authenticate('local'),
//   function (req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });
// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/users", (req, res) => {
  User.find().sort({ _id: -1 })
    .then(function (dbUser) {
      res.json(dbUser);
    })
});

module.exports = router;