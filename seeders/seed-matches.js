'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
return Promise.resolve();
    // return queryInterface.bulkInsert('Matches', [{
    //   name: ,
    //   UserId: ,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve();
    // return queryInterface.bulkDelete('Matches', null, {});
  }
};
