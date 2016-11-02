/**
* AuthController
*
* @description :: Server-side logic for managing Auths
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	login: function (req, res) {
		var email = req.param('identifier');
		var password = req.param('password');

		if (!email || !password) {
			return res.json(401, {message: sails.__('Error.User.Login.All.NotInformed')});
		}

		User.findOne({email: email}, function (err, user) {
			if (!user) {
				return res.json(401, {message: sails.__('Error.User.Login.All.Invalid')});
			}

			User.comparePassword(password, user, function (err, valid) {
				if (err) {
					return res.json(401, {message: sails.__('Error.User.Login.All.WrongPassword')});
				}

				if (!valid) {
					return res.json(401, {message: sails.__('Error.User.Login.All.WrongPassword')});
				} else {
					user.access_token = jwToken.issue({id : user.id });
					res.json(user);
				}
			});
		})
	}
};
