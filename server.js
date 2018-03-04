const express = require('express')

const routeHTML = require('./app/routing/htmlRoutes.js');
const routeAPI = require('./app/routing/apiRoutes.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/public'));

app.use(routeHTML);
app.use(routeAPI);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
