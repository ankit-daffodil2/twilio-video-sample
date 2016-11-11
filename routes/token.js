var express = require('express');
var router = express.Router();
var tokenService = require('../twilio_util');
var config = require('../config/config');
config = config.access_token;

router.get('/:identity', function(request, response) {

    var identity = request.params.identity;

    // Generate Token from Util file and include it in a JSON response
    response.send({identity: identity,
        token: tokenService.generateToken(config, identity)});
});

module.exports = router;
