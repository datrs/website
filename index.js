var css = require('sheetify')
var choo = require('choo')

css('tachyons')

css`
  @font-face {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Archivo Bold'), local('Archivo-Bold'), url(/assets/archivo-bold.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`

css`
  body {
    background-color: #222222;
    color: #ffffff;
  }

  a {
    color: #2aca4b;
    text-decoration: none;
  }

  .archivo, h1, h2, h3, h4, h5, h6 {
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
  }
`

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/clicks'))

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

if (!module.parent) app.mount('body')
else module.exports = app
