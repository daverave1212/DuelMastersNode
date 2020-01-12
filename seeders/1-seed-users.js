'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 5;

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      username: 'jupanul',
      password: bcrypt.hashSync('bossdeboss', saltRounds),
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
      password: bcrypt.hashSync('banane', saltRounds),
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
      password: bcrypt.hashSync('ibiza1111', saltRounds),
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
      password: bcrypt.hashSync('parola', saltRounds),
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
