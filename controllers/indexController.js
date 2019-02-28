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
        res.redirect("/register")
    }
});

router.get("/daily_log", (req, res)=>{
    if (req.user) {
        db.User.findOne({ _id: req.user , 
            raw: true
        }).then(function (dbUser) {
            res.render("log", {
                loginStatus: true, 
                User: req.user
            });
            console.log("welcome " + req.user);
        })
        // send data to handlebars and render
    } else {
        res.redirect("/register")
    }
});
router.get("/list", (req, res)=>{
    if (req.user) {
        db.User.findOne({ _id: req.user , 
            raw: true
        }).then(function (dbUser) {
            res.render("list", {
                loginStatus: true, 
                User: req.user
            });
            console.log("welcome " + req.user);
        })
        // send data to handlebars and render
    } else {
        res.redirect("/register")
    }
});
router.get("/ticket", (req, res)=>{
    if (req.user) {
        db.User.findOne({ _id: req.user , 
            raw: true
        }).then(function (dbUser) {
            res.render("ticket", {
                loginStatus: true, 
                User: req.user
            });
            console.log("welcome " + req.user);
        })
        // send data to handlebars and render
    } else {
        res.redirect("/register")
    }
});
router.get("/scheduler", (req, res)=>{
    if (req.user) {
        db.User.findOne({ _id: req.user , 
            raw: true
        }).then(function (dbUser) {
            res.render("scheduler", {
                loginStatus: true, 
                User: req.user
            });
            console.log("welcome " + req.user);
        })
        // send data to handlebars and render
    } else {
        res.redirect("/register")
    }
});
router.get("/document", (req, res) =>{
    if (req.user) {
        db.User.findOne({ _id: req.user , 
            raw: true
        }).then(function (dbUser) {
            res.render("document", {
                loginStatus: true, 
                User: req.user
            });
            console.log("welcome " + req.user);
        })
        // send data to handlebars and render
    } else {
        res.redirect("/register")
    }
});
router.get("/valve", (req, res) =>{
    if (req.user) {
        db.User.findOne({ _id: req.user , 
            raw: true
        }).then(function (dbUser) {
            res.render("valveSheet", {
                loginStatus: true, 
                User: req.user
            });
            console.log("welcome " + req.user);
        })
        // send data to handlebars and render
    } else {
        res.redirect("/register")
    }
});
router.get("/locates", (req, res) =>{
    if (req.user) {
        db.User.findOne({ _id: req.user , 
            raw: true
        }).then(function (dbUser) {
            res.render("locates", {
                loginStatus: true, 
                User: req.user
            });
            console.log("welcome " + req.user);
        })
        // send data to handlebars and render
    } else {
        res.redirect("/register")
    }
});
router.get("/image", (req, res) =>{
    res.render("img");
});
router.get("/saved", (req, res) =>{
    if (req.user) {
        db.User.findOne({ _id: req.user , 
            raw: true
        }).then(function (dbUser) {
            res.render("saved", {
                loginStatus: true, 
                User: req.user
            });
            console.log("welcome " + req.user);
        })
        // send data to handlebars and render
    } else {
        res.redirect("/register")
    }
});

module.exports = router;