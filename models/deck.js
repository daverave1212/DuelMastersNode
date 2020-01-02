'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING
  }, {});
  Deck.associate = function(models) {
    Deck.belongsTo(models.User);
    Deck.belongsToMany(models.Card, {through: 'DeckCards'});
  };
  return Deck;
};