var requestify = require('requestify');

module.exports = {

  /*
  * Sends a lead to RDStation
  *
  * @param  object Lead
  *
  */
  sendToRdStation: function (lead) {
    requestify.request('https://www.rdstation.com.br/api/1.3/conversions', {
      method: 'POST',
      body: {
        token_rdstation: lead.campaign.rdToken,
        email: lead.email,
        identificador: lead.identifier,
        nome: lead.name,
        empresa: lead.company,
        cargo: lead.role,
        telefone: lead.phone,
        celular: lead.cellphone,
        website: lead.website,
        twitter: lead.twitter,
        tags: lead.tags,
        c_utmz: lead.c_utmz
      },
      headers: {
        'Content-Type': 'application/json'
      }}).then(function(response) {
        console.log('Response: ', response);
    });
  }
};
