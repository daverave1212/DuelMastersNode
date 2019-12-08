'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    loses: DataTypes.INTEGER,
    rank: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // User.belongsToMany(models.Match, {as: 'matches', through: 'UserMatches'});
    // User.belongsToMany(models.Deck, {as: 'decks', through: 'UserDecks'});
  };
  return User;
};