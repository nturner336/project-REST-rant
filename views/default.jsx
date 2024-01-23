

const React = require('react')

function Def (html) {}

module.exports = Def

function Def (html) {
    return (
        <html>
            <head>
                <title>Eat Well</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  
