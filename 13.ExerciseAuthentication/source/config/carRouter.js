const router = require('express').Router();
const crypto = require('crypto');

const VARS = {
  cars: require('../infrastructure/cars')
};

function generateId() {
  return crypto.randomBytes(14).toString('hex');
}

router.get('/all', (req, res) => {
  if (!req.session.cars) {
    req.session.cars = VARS.cars;
  }
  res.render('cars/all', {
    cars: req.session.cars,
    isLogged: req.user || false
  });
});
router.get('/edit/:id', isAuthenticated, (req, res) => {
  if (!req.session.cars) {
    req.session.cars = VARS.cars;
  }
  let carID = req.params.id.split('/').pop();
  let cars = req.session.cars;
  res.render('cars/edit', { car: cars.filter(car => car._id === carID)[0] });
});
router.get('/create', isAuthenticated, (req, res) => {
  res.render('cars/create', req);
});
router.get('/rent/:id', isAuthenticated, (req, res) => {
  if (!req.session.cars) {
    req.session.cars = VARS.cars;
  }
  let carID = req.params.id.split('/').pop();
  let car = req.body;
  console.log(car);
  req.session.cars = req.session.cars.filter(car => car._id !== carID);
  car._id = carID;
  car.rented = true;
  car.rentedCount += 1;
  let tempArr = req.session.cars;
  tempArr.push(car);
  req.session.cars = tempArr;
  res.redirect('/cars/all');
});

router.post('/create', isAuthenticated, (req, res) => {
  let car = req.body;
  car._id = generateId();
  req.session.cars = VARS.cars;
  req.session.cars.push(car);
  res.redirect('all');
});
router.post('/edit/:id', isAuthenticated, (req, res) => {
  if (!req.session.cars) {
    req.session.cars = VARS.cars;
  }
  let carID = req.params.id.split('/').pop();
  let car = req.body;
  console.log(car);
  req.session.cars = req.session.cars.filter(car => car._id !== carID);
  car._id = carID;
  let tempArr = req.session.cars;
  tempArr.push(car);
  req.session.cars = tempArr;
  res.redirect('/');
});

function isAuthenticated(req, res, next) {
  if (req.user === undefined) {
    req.message = 'Please Login to perform this action!';
    return res.render('users/login', req);
  }
  next();
}

module.exports = router;
