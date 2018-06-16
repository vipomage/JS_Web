const passport = require('passport');
const LocalPassport = require('passport-local');
const encryption = require('./encryption');
const router = require('express').Router();

const VARS = {
  users: require('../infrastructure/users'),
  getLogin: '/login',
  postLogin: '/login',
  getRegister: '/register',
  postRegister: '/register',
  renderRegister: 'users/register',
  renderLogin: 'users/login',
  renderHome: 'home'
};

passport.use(
  new LocalPassport((username, password, done) => {
    const user = VARS.users.filter(u => u.username === username)[0];
    if (user !== undefined) {
      const hashedPass = encryption.generateHashedPassword(user.salt, password);
      if (user.hashedPass === hashedPass) {
        return done(null, user);
      }
    }
    return done(null, false);
  })
);
passport.serializeUser((user, done) => {
  if (user) {
    return done(null, user._id);
  }
});
passport.deserializeUser((id, done) => {
  const user = VARS.users.filter(u => u._id === id)[0];
  if (user) {
    return done(null, user);
  }
  return done(null, false);
});

router.get('/profile/me', (req, res) => {
  res.render('users/profile', req.session.user);
});

router.get(VARS.getLogin, (req, res) => {
  const message = req.session.message;
  req.session.message = '';
  res.render(VARS.renderLogin, req);
}); // GET Login Page

router.post(VARS.postLogin, function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      req.message = 'Invalid credentials';
      return next(err);
    }
    if (!user) {
      req.message = 'Invalid credentials!';
      return res.render(VARS.renderLogin, req);
    }
    req.logIn(user, function(err) {
      if (err) {
        req.message = 'Invalid credentials!';
        return next(err);
      }
      req.message = 'Login Success';
      req.isLogged = true;
      return res.render(VARS.renderHome, req);
    });
  })(req, res, next);
});

router.get(VARS.getRegister, (req, res) => {
  const message = req.message;
  req.message = '';
  res.render(VARS.renderRegister, req);
}); // GET Register Page

router.post(VARS.postRegister, (req, res) => {
  const { username, password, repeat } = req.body;
  if (password !== repeat) {
    return error("Passwords don't match");
  }
  if (VARS.users.filter(u => u.username === username).length > 0) {
    return error('Username is taken');
  }
  const salt = encryption.generateSalt();
  const hashedPass = encryption.generateHashedPassword(salt, password);
  const user = {
    _id: encryption.generateId(),
    username,
    salt,
    hashedPass
  };
  VARS.users.push(user);

  req.login(user, err => {
    if (err) {
      req.message = 'Something went wrong';
      return res.render(VARS.renderHome, req);
    }
    req.message = 'Registration successful';
    req.isLogged = req.user === undefined;
    return res.render(VARS.renderHome, req);
  });

  function error(message) {
    req.inputData = {
      username,
      password,
      repeat
    };
    req.message = message;
    return res.render(VARS.renderRegister, req);
  }
}); //POST Register

module.exports = router;
