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
      first_player: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      first_player_deck: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      second_player: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      second_player_deck: {
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