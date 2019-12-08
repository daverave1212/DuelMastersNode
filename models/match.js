'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    firstPlayer: DataTypes.INTEGER,
    firstPlayerDeck: DataTypes.INTEGER,
    secondPlayer: DataTypes.INTEGER,
    secondPlayerDeck: DataTypes.INTEGER
  }, {});
  Match.associate = function (models) {
    // Match.belongsTo(models.User, { foreignKey: 'first_player' });
    // Match.belongsTo(models.User, { foreignKey: 'second_player' });
    // Match.hasOne(models.User, {targetKey: ''})
  };
  return Match;
};