/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  User
    .find()
    .then(function(users) {
      if (users.length > 0) cb();
      //
      // User
      //   .create({
      //     email: 'admin@admin.com',
      //     password: '123123',
      //     confirmPassword: '123123',
      //     name: 'Admin',
      //     role: 'admin',
      //     steganoImage: 'assets/images/admin.png'
      //   }).then(function() {
      //     cb();
      //   });
    })

};
