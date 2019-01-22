let express = require('express');
let router = express.Router();
let db = require('../models');

router.get("/saved", function (req, res) {
    db.Saved.find().sort({ _id: -1 })
        .then(function (dbSaved) {
            res.render("saved", {
                Saved: dbSaved
            });
        })
  });
  // A route to save articles.
  router.get("/save/:id", function (req, res) {
    db.List.findById(req.params.id)
      // .populate('comment')
      .exec(function (err, listData) {
        if (err) {
          console.log(err);
        } else {
          console.log(listData);
  
          const savingData = {};
  
          savingData.name = listData.name;
                savingData.date = listData.date;
                savingData.list_1 = listData.list_1;
                savingData.list_2 = listData.list_2;
                savingData.list_3 = listData.list_3;
                savingData.list_4 = listData.list_4;
                savingData.list_5 = listData.list_5;
                savingData.list_6 = listData.list_6;
                savingData.list_7 = listData.list_7;
                savingData.list_8 = listData.list_8;
                savingData.list_9 = listData.list_9;
                savingData.list_10 = listData.list_10;
                savingData.list_11 = listData.list_11;
                savingData.list_12 = listData.list_12;
                savingData.list_13 = listData.list_13;
                savingData.list_14 = listData.list_14;
                savingData.list_15 = listData.list_15;
                savingData.list_16 = listData.list_16;
                savingData.list_17 = listData.list_17;
                savingData.list_18 = listData.list_18;
  
          console.log(savingData);
          db.Saved.create(savingData)
            .then(function (confirm) {
              console.log(confirm);
            })
            .catch(function (error) {
              console.log(error);
            });
          res.redirect("/alllists");
        }
      });
  });
 

module.exports = router;