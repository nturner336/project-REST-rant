const router = require('express').Router();


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
//GET/places/show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id] })
  }
})

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new'); // Renders the 'places/new' view
});

// GET /places
router.get('/', (req, res) => {
  res.render('places/index', { places }); // Renders the 'places/index' view with 'places' data
});


module.exports = router;
