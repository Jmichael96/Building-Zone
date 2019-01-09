let express = require('express');
let router = express.Router();

router.get('/home', function (req, res, next) {
    res.render("index");
});
router.get("/register", function(req, res, next){
    res.render("register");
});
router.get("/login", function(req, res){
    res.render("login");
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
})

module.exports = router;