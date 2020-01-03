'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Decks', [{
      name: 'Pachetzelu ala gros',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pachetzelu magic',
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Unde dai si unde crapa',
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pachetzel ca pe yu gi oh',
      UserId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]).catch(e=>console.error(e));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Decks', null, {});
  }
};
