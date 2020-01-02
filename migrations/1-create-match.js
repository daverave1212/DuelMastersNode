'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstPlayer: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      firstPlayerDeck: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      secondPlayer: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      secondPlayerDeck: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Matches');
  }
};