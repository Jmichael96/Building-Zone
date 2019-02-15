let express = require('express');
let router = express.Router();
const db = require("../models");
// let passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const sessionChecker = require("../config/middleware/sessionChecker");

router.get("/landing", (req, res) =>{
    res.render("landing")
})
router.get("/",(req, res) =>{
    res.redirect("/landing");
})

// router.get("/home", (req, res) =>{
//     if(req.session.user && req.cookies.user_sid){
//         res.render("home");
//     }
//     else{
//         res.redirect("/login");
//     };
// });

router.get("/home", function (req, res) {
    console.log(req.user);
    if (req.user) {
        db.User.findOne({ _id: req.user , 
            raw: true
        }).then(function (dbUser) {
            res.render("index", {
                loginStatus: true, 
                User: req.user
            });
            console.log("welcome " + req.user);
        })
        // send data to handlebars and render
    } else {
        res.redirect("/")
    }
});
router.get("/register", function(req, res, next){
    res.render("register");
});
//logout redirects back to homepage
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

router.get("/login", sessionChecker, function (req, res) {
    if(req.user){
        res.redirect("/home");
        return;
    }
    res.render("login");
    return;
});

// router.get("/users", isAuthenticated, function(req, res) {
//     res.render("users");
// });

router.get("/invoice", (req, res)=>{
    if (req.user) {
        db.User.findOne({ _id: req.user , 
            raw: true
        }).then(function (dbUser) {
            res.render("invoice", {
                loginStatus: true, 
                User: req.user
            });
            console.log("welcome " + req.user);
        })
        // send data to handlebars and render
    } else {
        res.redirect("/signup")
    }
    // console.log(req.user);
    // db.Invoice.find().then((dbInvoice)=>{
    //     db.User.findOne({
    //         _id: req.user, 
    //         raw: true,
    //     })
    //     .then((dbUser) =>{
    //         res.render("invoice", {
    //             loginStatus: true,
    //             data: dbInvoice, dbUser,
    //             User: req.user,
    //         });
    //         console.log();
    //     });    
    // })
});
router.get("/daily_log", (req, res)=>{
    res.render("log")
});
router.get("/list", (req, res)=>{
    res.render("list");
});
router.get("/ticket", (req, res)=>{
    res.render("ticket");
});
router.get("/scheduler", (req, res)=>{
    res.render("scheduler");
});
router.get("/document", (req, res) =>{
    res.render("document");
});
router.get("/valve", (req, res) =>{
    res.render("valveSheet");
});
router.get("/locates", (req, res) =>{
    res.render("locates");
});
router.get("/image", (req, res) =>{
    res.render("img");
});
router.get("/saved", (req, res) =>{
    res.render("saved");
});

module.exports = router;