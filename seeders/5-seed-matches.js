'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Matches', [{
      firstPlayerHP: 0,
      secondPlayerHP: 2300,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId1: 1,
      UserId2: 2,
      DeckId1: 1,
      DeckId2: 2
    }]);
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Matches', null, {});
  }
};
