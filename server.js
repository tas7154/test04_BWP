const express = require('express');
const people = require('./people.json');

const app = express();

app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

// routes 
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    people:people.profiles
  });
});
app.get('/profile', (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  })
  //res.send(req.query.id);
});

const server = app.listen(7000, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});