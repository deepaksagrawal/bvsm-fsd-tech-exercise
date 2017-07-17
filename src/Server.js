var express = require('express')

var app = express()

var file = require("fs");

app.get('/products', function (req, res) {
   file.readFile( __dirname + "/" + "Products.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.listen(4000, function () {
  console.log('Products json server listening on port 4000!')
})