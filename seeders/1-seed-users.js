'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      username: 'jupanul',
      password: 'bossdeboss',
      email: 'ambemnew@mailinator.co',
      wins: 999,
      loses: 1,
      rank: 100,
      role: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'bananierul',
      password: 'banane',
      email: 'banana1@mailinator.co',
      wins: 0,
      loses: 0,
      rank: 0,
      role: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'scotrame',
      password: 'ibiza1111',
      email: 'gmail@mailinator.co',
      wins: 0,
      loses: 0,
      rank: 0,
      role: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'eusimaicineva',
      password: 'parola',
      email: 'parola@mailinator.co',
      wins: 0,
      loses: 0,
      rank: 0,
      role: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
