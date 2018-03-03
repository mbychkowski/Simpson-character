const express = require('express')

const routeHTML = require('./app/routing/htmlRoutes.js');
const routeAPI = require('./app/routing/apiRoutes.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use('/', routeHTML);
app.use('/survey', routeHTML);
app.use('/api/friends', routeAPI);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
