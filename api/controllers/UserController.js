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

	update: function(req, res) {
		delete req.body.user.password;
		User.update(req.params.id, req.body.user)
		.then(function(results) {
			return res.ok(_.first(results));
		})
		.catch(function(err) {
			return res.badRequest(err.message);
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
	},

	search: function(req, res) {
    var filter = req.query.filter;
    if (!filter) return res.badRequest();

    User
      .find()
      .where({
        contains: { name: filter }
      })
      .then(function(results) {
        return res.ok({users: results});
      });
  },

	populatePerson: function() {
		var model = {
			city: "Cidade Teste",
			zipCode: "56678888",
			locality: "Bairro teste",
			publicPlace: "Logradouro teste",
			complement: "AP",
			characteristics: "Urbana",
			typeHousehold: "Particular Improvisado",
			typeWaterSupply: "Rede geral",
			toiletBathroom: "Sim",
			lightingUsed: "Elétrica com medidor comunitário",
			familyType: "Indígena",
			fullName: "Teste Da Silva",
			gender: "Masculino",
			skinColor: "Preta",
			motherName: "Joana teste",
			fatherName: "Mario teste",
			keepImage: true
		};

		for (var i = 1; i <= 20; i++) {
			var Chance = require('chance'),
	    chance = new Chance();

				var newPerson = model;
				newPerson.fullName = chance.name();
				newPerson.steganoImage = 'assets/images/' + i + '.png';

				Person
				.create(model)
				.then();
				console.log('>> '+ i);

		}
	}
};
