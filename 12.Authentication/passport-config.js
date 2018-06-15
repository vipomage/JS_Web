const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(
  session({
      secret: "neshto-taino!@#$%",
      resave: false,
      saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
