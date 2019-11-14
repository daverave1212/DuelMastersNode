'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    rarity: DataTypes.STRING,
    type: DataTypes.STRING,
    cost: DataTypes.STRING,
    src: DataTypes.STRING
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};