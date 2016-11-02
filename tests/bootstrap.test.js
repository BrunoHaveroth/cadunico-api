var Sails = require('sails'),
    _     = require('lodash');

global.DOMAIN = 'http://localhost';
global.PORT = 1338;
global.HOST = DOMAIN + ':' + PORT;

before(function(callback) {
  this.timeout(50000);

  configs = {
    requireAccountActivation: false,
    log: {
      level: 'verbose'
    },
    port: PORT,
    environment: 'test',
    // @TODO needs suport to csrf token
    csrf: false,
    hooks: {
      grunt: false,
      socket: false,
      pubsub: false
    }
  };

  console.log("Sails: ", sails);
  Sails.lift(configs, function(err, sails) {
    if (err) {
      return callback(err);
    }

    callback(err, sails);
  });
});

after(function(done) {
  Sails.lower(done);
});
