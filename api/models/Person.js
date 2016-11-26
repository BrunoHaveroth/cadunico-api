/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    // ADDRESS
    city            : 'string',
    zipCode         : 'string',
    locality        : 'string',
    publicPlace     : 'string',
    complement      : 'string',

    // CHARACTERISTICS OF HOUSEHOLD
    characteristics : 'string',
    typeHousehold   : 'string',
    typeWaterSupply : 'string',
    toiletBathroom  : 'string',
    lightingUsed    : 'string',

    // FAMILY
    familyType      : 'string',

    //IDENTIFICATION OF THE PERSON
    fullName        : 'string',
    gender          : 'string',
    skinColor       : 'string',
    motherName      : 'string',
    fatherName      : 'string',

    steganoImage       : 'string',
    updateSteganoImage : 'string',
    keepImage          : 'boolean'
  }
};
