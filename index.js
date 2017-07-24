const express = require('express');
var app = express()
var port = 8080

app.get('/math/pi', function(req, res) {
  res.send(Math.PI.toString())
})
app.listen(8080)
