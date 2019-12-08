'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING
  }, {});
  Deck.associate = function(models) {
    // Deck.belongsToMany(models.Card, {as: 'cards'});
  };
  return Deck;
};