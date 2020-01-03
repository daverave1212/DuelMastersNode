module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'DeckCards',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        CardId: {
          type: Sequelize.INTEGER,
          unique: false
        },
        DeckId: {
          type: Sequelize.INTEGER,
          unique: false
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DeckCards');
  },
};