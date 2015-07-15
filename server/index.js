var browserify = require('browserify-middleware')
var express = require('express');
var app = express();

//route to your index.html
app.use(express.static('client/'));

//browersify which injects all dependencies into index.html
var shared = ['angular'];
app.get('/js/vendor-bundle.js', browserify(shared));
app.get('/js/app-bundle.js', browserify('./client/app.js', { external: shared }));


var port = process.env.PORT || 4000;

app.listen(port);
console.log("Listening on port", port);