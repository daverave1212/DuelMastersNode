'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.resolve();
    // return queryInterface.bulkInsert('HistoryMoves', [{

    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve();
    // return queryInterface.bulkDelete('HistoryMoves', null, {});
  }
};
