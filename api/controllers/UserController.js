/**
* UserController
*
* @description :: Server-side logic for managing Users
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	create: function (req, res) {
		var user = req.body.user;

		if (user.password !== user.confirmPassword) {
			return res.badRequest({err: 'Password doesn\'t match, What a shame!'});
		}
		User.create(user).exec(function (err, user) {
			if (err) {
				return res.json(err.status, {err: err});
			}
			// If user created successfuly we return user and token as response
			if (user) {
				// NOTE: payload is { id: user.id}
				res.json(201, {user: user, token: jwToken.issue({id: user.id})});
			}
		});
	},
	
	me: function (req, res) {
		res.json(200, {user: req.user});
	},

	upload: function(req, res) {
	  req.file('avatar').upload(function (err, uploadedFiles) {
	    var url = _.first(uploadedFiles).fd;
	    return res.ok(url);
	  });
	}
};
