/**
* adminAuth
*
* @description :: Policy to check if user is an administrator
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
*/

module.exports = function (req, res, next) {
  if (req.user.role != 'adminAgency' && req.user.agency) {
    return res.json(403, {message: sails.__("Error.Auth.Admin.Agency.Invalid")});
  }
  next();
};
