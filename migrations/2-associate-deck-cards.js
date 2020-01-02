module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'DeckCards',
        {
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
            primaryKey: true,
          },
          DeckId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
          },
        }
      );
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('DeckCards');
    },
  };