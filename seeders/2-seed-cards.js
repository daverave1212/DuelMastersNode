'use strict';
const cardsSource = require('../config/cardsSource.json');

module.exports = {
  up: (queryInterface, Sequelize) => {

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
    return queryInterface.bulkDelete('Cards', null, {});
  }
};
