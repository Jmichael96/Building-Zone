let express = require("express");
let app = express();
let exphbs = require('express-handlebars');
let PORT = process.env.PORT || 8000;
let mongoose = require('mongoose');
let logger = require("morgan");
let passport = require("./config/passport");
let session = require("express-session");
const path = require("path");
// const LocalStrategy = require('passport-local').Strategy;
// var db = require('./models');
app.use(express.static(path.join(__dirname, "/public")));


app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");
// all of the routes for the controllers
let user = require("./controllers/userController");
app.use(user);
let index = require("./controllers/indexController");
app.use(index);
let logController = require("./controllers/logController");
app.use(logController);
let list = require("./controllers/listController");
app.use(list);
let ticket = require("./controllers/ticketController");
app.use(ticket);
let invoice = require("./controllers/invoiceController");
app.use(invoice);
let schedule = require("./controllers/scheduleController");
app.use(schedule);

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/capstone';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
let db = mongoose.connection;
// Check for a connection.
db.once('open', () => {
  console.log('We have a connection! :D');
});
// Checking for errors.
db.on('error', (err) => {
  console.log('Database error: ', err);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });
  // error handler
  // define as the last app.use callback
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
app.listen(PORT, function () {
  console.log("Visit http://localhost:%s/ in your browser.", PORT, PORT);
});