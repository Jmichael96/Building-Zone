let express = require('express');
let router = express.Router();
const db = require("../models");
// let passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/landing", (req, res) =>{
    res.render("landing")
})
router.get("/",(req, res) =>{
    res.redirect("/home");
})
router.get("/home", function (req, res) {
    console.log(req.user);
    if (req.user) {
        db.User.findOne({ id: req.user, 
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
router.get("/login", function (req, res) {
    if(req.user){
        res.redirect("/");
    }
    res.render("login");
});

router.get("/users", isAuthenticated, function(req, res) {
    res.render("users");
});

router.get("/invoice", (req, res)=>{
    res.render("invoice");
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