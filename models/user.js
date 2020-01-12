'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    loses: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    role: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Deck);
    User.hasMany(models.Match);
  };
  return User;
};