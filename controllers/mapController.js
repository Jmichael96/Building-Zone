let express = require('express');
let router = express.Router();


router.get("/map", (req, res) =>{
    res.render("map");
    
});


module.exports = router;