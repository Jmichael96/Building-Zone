let express = require("express");
let app = express();
let exphbs = require('express-handlebars');
let PORT = process.env.PORT || 8080;
let mongoose = require('mongoose');
let logger = require("morgan");
let passport = require("./config/passport");
let session = require("express-session");
let bodyParser = require("body-parser")
let routes = require("./controllers");

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


app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));
// app.use(require('cookie-parser')());

app.use(
  bodyParser.urlencoded({
      extended: false
  })
);
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

let apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);
let htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);
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
let document = require("./controllers/documentController");
app.use(document);
let map = require("./controllers/mapController");
app.use(map);
let valve = require("./controllers/valveController");
app.use(valve);
let saved = require("./controllers/savedController");
app.use(saved);

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
  console.log("Visit http://localhost:%s/ in your browser.", PORT);
});