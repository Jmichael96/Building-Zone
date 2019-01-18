let express = require('express');
let router = express.Router();
let passport = require("../config/passport");
// let passport = require("../config/passport");
// var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function(req, res){
    res.render("index");
})
// router.get("/home", function(req, res){
//     console.log(req.user);
//     if(req.user) {
//         res.render("/home");
//     }
//     res.redirect("/register");
// });
router.get("/register", function(req, res, next){
    res.render("register");
});
router.get("/login", function (req, res) {
    res.render("login");
});
// rou
router.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/home"
}));

// //logout redirects back to homepage
// router.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/home");
// });

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

module.exports = router;