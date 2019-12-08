'use strict';
const cardsSource = require('../config/cardsSource.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Cards', cardsSource.map(card => ({
      name: card.name,
      rarity: card.rarity,
      type: card.type,
      cost: card.cost,
      src: '',
      race: card.race,
      power: card.power,
      createdAt: new Date(),
      updatedAt: new Date()
    })));
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Cards', null, {});
  }
};
