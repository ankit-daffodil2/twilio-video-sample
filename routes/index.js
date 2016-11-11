var express = require('express');
var router = express.Router();
var AccessToken = require('twilio').AccessToken;
var VideoGrant = AccessToken.VideoGrant;

router.get('/', function(request, response) {

    response.send('');
});

module.exports = router;
