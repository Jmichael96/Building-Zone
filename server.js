let express = require("express");
let app = express();
let exphbs = require('express-handlebars');
let PORT = process.env.PORT || 8080;
let mongoose = require('mongoose');
const methodOverride = require("method-override");
const cookieParser = require('cookie-parser');
let logger = require("morgan");
let passport = require("./config/passport");
let session = require("express-session");
const MongoStore = require('connect-mongo')(session)
let bodyParser = require("body-parser")
// let routes = require("./controllers");

app.use(logger("dev"));
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
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
app.use(
  session({
    key: "user_sid",
    secret: "keyboard cat", resave: true,
    saveUninitialized: false,
    cookie:{
      expires: 60000000,
    },
    store: new MongoStore({
      mongooseConnection: db
    })
}));
app.use(passport.initialize());
app.use(passport.session());
// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
// Session-persisted message middleware
app.use(function(req, res, next){
  var err = req.session.error,
      msg = req.session.notice,
      success = req.session.success;

  delete req.session.error;
  delete req.session.success;
  delete req.session.notice;

  if (err) res.locals.error = err;
  if (msg) res.locals.notice = msg;
  if (success) res.locals.success = success;

  next();
});

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