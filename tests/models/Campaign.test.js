var should = require('should');

describe('Campaign Model', function(){
  describe('#Create' , function (done) {
    Campaign.create({
      name: 'Test Campaign',
      integratesWithRdStation: false
    })
    .then(function (campaign) {
      campaign.should.be.ok;
      done();
    })
    .catch(done);
  });
});
