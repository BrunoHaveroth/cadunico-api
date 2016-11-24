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

	test: function(req, res) {
		var fs = require('fs'),
		request = require('request');

		var download = function(uri, filename, callback){
			request.head(uri, function(err, res, body){
				console.log('content-type:', res.headers['content-type']);
				console.log('content-length:', res.headers['content-length']);
				request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
			});
		};

		var names = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Ashe', 'Azir', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Cassiopeia', 'Corki', 'Darius', 'Diana', 'Draven',
		 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jax',
		 'Jayce', 'Jhin', 'Jinx', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'Kindred', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai',
		 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Nidalee', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Pantheon', 'Poppy', 'Quinn', 'Rammus', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sejuani',
		 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Syndra', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twitch',
		 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Xerath', 'Yasuo', 'Yorick', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zyra'];

		names.forEach(function(item, index) {
			download('http://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/'+ item +'.png', 'assets/images/'+ item +'.png', function(){
				console.log('---' + index + '/' + names.length);
			});
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
			fatherName: "Mario teste"
		};

		var names = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Ashe', 'Azir', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Cassiopeia', 'Corki', 'Darius', 'Diana', 'Draven',
		 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jax',
		 'Jayce', 'Jhin', 'Jinx', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'Kindred', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai',
		 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Nidalee', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Pantheon', 'Poppy', 'Quinn', 'Rammus', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sejuani',
		 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Syndra', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twitch',
		 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Xerath', 'Yasuo', 'Yorick', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zyra'];

		var Chance = require('chance'),
    chance = new Chance();

	  names.forEach(function(item, index) {
			var newPerson = model;
			newPerson.fullName = chance.name();
			newPerson.steganoImage = 'assets/images/' + item + '.png';

			Person
			.create(model)
			.then();
			console.log('>> '+ index);

	  });
	}
};
