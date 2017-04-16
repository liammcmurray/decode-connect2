var express = require('express')
var nunjucks = require('nunjucks')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.set('view engine', 'nunjucks')
app.set('views', './views')
app.set('env', 'production')

app.listen(3000, function () {
  console.log('decoder listening on port 3000')
})
