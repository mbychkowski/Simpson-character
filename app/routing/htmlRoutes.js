const express = require('express');
const path = require('path');

var routeHTML = express.Router();

routeHTML.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});

routeHTML.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/survey.html'));
});

module.exports = routeHTML;
