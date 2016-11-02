/**
 * jwToken
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken & http://sailsjs.org/#!/documentation/concepts/Services
 */

var jwt = require('jsonwebtoken'),
    tokenSecret = "holdthedoor";

module.exports.issue = function(payload) {
  return jwt.sign(
    payload,
    tokenSecret,
    {
      expiresIn : '7d'
    }
  );
};

module.exports.verify = function(token, callback) {
  return jwt.verify(
    token,
    tokenSecret,
    {},
    callback
  );
};
