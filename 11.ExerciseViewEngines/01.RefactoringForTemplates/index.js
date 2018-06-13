const express = require('express');
const path = require('path');
const app = express();
const PORT = 8888;

let library = {
  books: {
    book1: {
      name: 'Twilight',
      src: 'book1',
      author: 'Stephanie Meyer',
      year: '2007'
    },
    book2: {
      name: 'New Moon',
      src: 'book2',
      author: 'Stephanie Meyer',
      year: '2006'
    },
    book3: {
      name: 'Eclipse',
      src: 'book3',
      author: 'Stephanie Meyer',
      year: '2007'
    },
    book4: {
      name: 'Breaking Dawn',
      src: 'book4',
      author: 'Stephanie Meyer',
      year: '2008'
    }
  }
};

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/static', express.static(path.join(__dirname, './static')));

app.get('/', (req, res) => res.render('index'));
app.get('/viewAllBooks', (req, res) => res.render('viewAll', library));
app.get('/details/:id', (req, res) => res.render('details', library.books[req.params.id]));
app.get('/addBook',(req,res)=>res.render('addBook'));

app.listen(PORT, () => console.log(`Listening on ${PORT}\nhttp://localhost:${PORT}`));