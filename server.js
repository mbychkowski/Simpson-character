const express = require('express');

const routeHTML = require('./app/routing/htmlRoutes');
const routeAPI = require('./app/routing/apiRoutes');

var app = express();
var PORT = process.env.PORT || 8080;

app.use('/', routeHTML);
app.use('/survey', routeHTML);
//
var routeAPI = express.Router();

routeAPI.use(bodyParser.urlencoded({extended: false}));
routeAPI.use(bodyParser.json());

routeAPI.get('/api/friends', function(res, req) {
  console.log(friends);

  return res.json(friends);
});

app.use('/api/friends', routeAPI);
//
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
