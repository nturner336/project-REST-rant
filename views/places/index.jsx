
function index (data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${index}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
  
  const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="" />
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
