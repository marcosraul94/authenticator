const authorize = require('./authorize');
const GCPAuth = require('./auth');

new GCPAuth();

exports.authorize = authorize;
