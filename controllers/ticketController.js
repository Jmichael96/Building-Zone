let express = require('express');
let router = express.Router();
let db = require('../models');
// creating a new ticket
router.post("/ticket", (req, res) =>{
    console.log(req.body)
    db.Ticket.create(req.body)
    .then((dbTicket)=>{
        res.redirect("/alltickets");
        console.log(dbTicket);
    })
    .catch((err)=>{
        console.log(err);
    })
});
// router.use(multer({ dest: "./uploads/",
//     rename: function (fieldname, filename) {
//       return filename;
//     },
// }));
// router.post("/api/photo",function(req,res){
//     var newItem = new Item();
//     newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//     newItem.img.contentType = "image/png";
//     newItem.save();
// });

// getting all data and rendering it to the page
router.get("/alltickets", (req, res)=>{
    db.Ticket.find().sort({ _id:-1})
    .then(function(dbTicket){
        res.render("alltickets", {
            Ticket: dbTicket
        })
    })
});
// deleting a single ticket
router.get("/delete-ticket/:id", function (req, res) {
    // Use the article id to find and update its saved boolean
    db.Daily_Log.findOneAndDelete({ "_id": req.params.id })
      .then( function(doc){
        console.log(doc);
        res.redirect("/alltickets");
      });
  });
// deleting all tickets
router.get("/clear-tickets", function(req, res){
    db.Daily_Log.deleteMany({})
    .then(function(doc){
      console.log(doc);
      res.redirect("/alltickets");
      console.log('Everything is gone...');
    })
    .catch((err)=>{
        console.log("error deleting all logs" + err);
        res.render("/tickets");
    })
  })
module.exports = router;