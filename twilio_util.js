var AccessToken = require('twilio').AccessToken;
var VideoGrant = AccessToken.VideoGrant;

module.exports.generateToken = function(config, identity) {

    var token = new AccessToken(
        config.TWILIO_ACCOUNT_SID,
        config.TWILIO_API_KEY,
        config.TWILIO_API_SECRET
    );

    // Assign the generated identity to the token
    token.identity = identity;

    // grant the access token Twilio Video capabilities
    var grant = new VideoGrant();
    grant.configurationProfileSid = config.TWILIO_CONFIGURATION_SID;
    token.addGrant(grant);

    return token.toJwt();
}