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



module.exports = router;