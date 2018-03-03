const express = require('express');
const bodyParser = require('body-parser');
const friends = require('../data/friend.js');

var routeAPI = express.Router();

routeAPI.use(bodyParser.urlencoded({extended: false}));
routeAPI.use(bodyParser.json());

routeAPI.get('/api/friends', function(res, req) {
  console.log(friends);

  return res.json(friends);
});

module.exports = routeAPI;

// app.post('/api/friends', function(res, req) {
//   var newRequest = req.body;
//
//   console.log(newFriend);
//
//   friends.push(newFriend);
//
//   res.json(newFriend);
// });
