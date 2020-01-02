'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('History_Moves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matchId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      actionBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      target: {
        allowNull: false,
        type: Sequelize.STRING
      },
      outcome: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('History_Moves');
  }
};