/**
* clientAuth
*
* @description :: Policy to check if user is authorized with JSON web token
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
*/

module.exports = function (req, res, next) {
  var token;

  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');
    if (parts.length == 2) {
      var scheme = parts[0],
      credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return res.json(401, {message: sails.__("Error.Auth.Token.Unformatted")});
    }
  } else if (req.param('token')) {
    token = req.param('token');
    // We delete the token from param to not mess with blueprints
    delete req.query.token;
  } else {
    return res.json(401, {message: sails.__("Error.Auth.Token.NotFound")});
  }

  jwToken.verify(token, function (err, token) {
    if (err) return res.json(401, {message: sails.__("Error.Auth.Token.Invalid")});
    req.token = token;
    return User.findOne(token.id)
    .then(function (user) {
      req.user = user;
      return next();
    }).catch(function (err) {
      return res.json(400, {message: sails.__("Error.User.Find.Id.NotFound")});
    });
  });
};
