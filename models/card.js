'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    rarity: DataTypes.STRING,
    type: DataTypes.STRING,
    cost: DataTypes.STRING,
    src: DataTypes.STRING,
    race: DataTypes.STRING,
    power: DataTypes.STRING
  }, {});
  Card.associate = function(models) {
    Card.belongsToMany(models.Deck, {through: 'DeckCards'});
  };
  return Card;
};