'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeckCard = sequelize.define('Deck_Card', {
    deckId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER
  }, {});
  DeckCard.associate = function(models) {
    // associations can be defined here
  };
  return DeckCard;
};