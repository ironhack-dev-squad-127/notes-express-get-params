// app.js
const express = require('express')
const path = require('path') 

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Route GET /
app.get('/', (req, res) => {
  console.log(req)
  res.render('index') // render "views/index.hbs"
})

// Route GET /about
app.get('/about', (req, res) => {
  res.render('about')
})

// Route GET /cities/whatever
app.get('/cities/:name', (req, res, next) => {
  console.log(req.params.name)
  let country
  switch (req.params.name) {
    case 'lisbon': country = 'Portugal'; break;
    case 'paris':  country = 'France'; break;
    case 'berlin': country = 'Germany'; break;
    default:       country = 'unknown'; break;
  }

  res.render('city-detail', {
    x: 10,
    name: req.params.name,
    country: country
  })
})

// app.get('/books/:bookId', (req, res, next) => {
// })

app.get('/colors', (req,res,next)=> {
  res.render('colors')
})

app.get('/colors-result', (req,res,next)=> {
  console.log(req.query.color)
  res.render('colors-result', {
    c: req.query.color
  })
})

app.listen(3000, () => console.log('App listening on port 3000!'))
