const router = require('express').Router();
const NewForm = require('./NewForm'); // Adjust the import path accordingly

let places = [
  {
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
  },
  {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
  }
];

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new'); // Renders the 'places/new' view
});

// GET /places
router.get('/', (req, res) => {
  res.render('places/index', { places }); // Renders the 'places/index' view with 'places' data
});

module.exports = router;
