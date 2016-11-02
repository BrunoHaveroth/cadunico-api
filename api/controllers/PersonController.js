/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
		Person.create(req.body.person)
		.then(res.ok)
		.catch(function(err) {
			return res.badRequest(err.message);
		});
	},

	upload: function(req, res) {
	  req.file('avatar').upload(function (err, uploadedFiles) {
	    var url = _.first(uploadedFiles).fd;
	    return res.ok(url);
	  });
	}
};
