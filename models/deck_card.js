'use strict';
module.exports = (sequelize, DataTypes) => {
  const deck_card = sequelize.define('Deck_Card', {
    deck_id: DataTypes.INTEGER,
    card_id: DataTypes.INTEGER
  }, {});
  deck_card.associate = function(models) {
    // associations can be defined here
  };
  return deck_card;
};