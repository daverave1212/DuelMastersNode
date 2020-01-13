'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Matches', [{
      firstPlayerHP: 0,
      secondPlayerHP: 2300,
      createdAt: new Date(),
      updatedAt: new Date(),
      User1Id: 1,
      User2Id: 2,
      Deck1Id: 1,
      Deck2Id: 2
    }]);
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Matches', null, {});
  }
};
