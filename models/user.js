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
    // User.belongsToMany(models.Match, {through:'Matches', foreignKey: 'first_player', as: 'matches'});
    // User.belongsToMany(models.Match, {through:'Matches', foreignKey: 'second_player', as: 'matches'});
  };
  return User;
};