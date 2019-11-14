'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('history_moves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      match_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      action_by: {
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
    return queryInterface.dropTable('history_moves');
  }
};