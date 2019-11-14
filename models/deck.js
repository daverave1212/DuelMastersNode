'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    owner_id: DataTypes.INTEGER
  }, {});
  Deck.associate = function(models) {
    // associations can be defined here
  };
  return Deck;
};