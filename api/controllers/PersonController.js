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

	update: function(req, res) {
		Person.update(req.params.id, req.body.person)
		.then(function(results) {
			return res.ok(_.first(results));
		})
		.catch(function(err) {
			return res.badRequest(err.message);
		});
	},

	search: function(req, res) {
    var filter = req.query.filter;
    if (!filter) return res.badRequest();

    Person
      .find()
      .where({
        contains: { fullName: filter }
      })
      .then(function(results) {
        return res.ok({people: results});
      });
  },

	upload: function(req, res) {
	  req.file('avatar').upload(function (err, uploadedFiles) {
	    var url = _.first(uploadedFiles).fd;
	    return res.ok(url);
	  });
	}
};
