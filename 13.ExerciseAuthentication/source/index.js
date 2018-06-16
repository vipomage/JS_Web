const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const authRouter = require('./config/auth');
const carRouter = require('./config/carRouter');
const port = 5555;

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '../public')));
app.use(cookieParser());
app.use(session({ secret: 'scatman joe' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/cars', carRouter);
app.use('/users', authRouter);

app.get('/', (req, res) => {
  req.isLogged = false;
  res.render('home', req);
});

app.listen(port, () =>
  console.log(`listening on ${port}\nhttp://localhost:${port}`)
);
