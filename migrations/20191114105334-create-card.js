'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      rarity: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },
      cost: {
        allowNull: true,
        type: Sequelize.INTEGER,
        unique: false
      },
      src: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
      },
      race: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
      },
      power: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        unique: false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        unique: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cards');
  }
};