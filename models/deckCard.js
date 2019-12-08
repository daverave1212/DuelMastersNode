'use strict';
module.exports = (sequelize, DataTypes) => {
  const deck_card = sequelize.define('Deck_Card', {
    deckId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER
  }, {});
  deck_card.associate = function(models) {
    // associations can be defined here
  };
  return deck_card;
};