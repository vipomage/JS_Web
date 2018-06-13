const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 8888;
const Book = require('./config/bookSchema');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/static', express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));

require('./config/db').then(() => {
  let books;
  Book.find({}).then(library => {
    books = library.map(book => book._doc);
  });

  app.get('/', (req, res) => {
    let count = books.length;
    res.render('index', { count });
  });
  app.get('/viewAllBooks', (req, res) => {
    Book.find({}).then(library => {
      books = library.map(book => book._doc);
      res.render('viewAll', { books });
    });
  });
  app.get('/details/:id', (req, res) => {
    Book.findById(req.params.id).then(data => {
      let book = data._doc;
      res.render('details', book);
    });
  });
  app.get('/addBook', (req, res) => res.render('addBook', { newBook: true }));
  app.post('/addBook', (req, res) => {
    console.log(req.body);
    let book = new Book({
      name: req.body.bookTitle,
      year: req.body.bookYear,
      src: req.body.bookPoster,
      author: req.body.bookAuthor
    })
      .save()
      .then(() => {
        res.render('addBook', { error: false });
      })
      .catch(err => {
        res.render('addBook', { error: true });
      });
  });
  app.listen(PORT, () =>
    console.log(`Listening on ${PORT}\nhttp://localhost:${PORT}`)
  );
});
