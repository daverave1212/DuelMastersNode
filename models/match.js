'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    firstPlayerHP: DataTypes.INTEGER,
    secondPlayerHP: DataTypes.INTEGER,
  }, {});
  Match.associate = function (models) {
    Match.belongsTo(models.User, {as: 'firstPlayer'});
    Match.belongsTo(models.User, {as: 'firstPlayerDeck'});
    Match.belongsTo(models.User, {as: 'secondPlayer'});
    Match.belongsTo(models.User, {as: 'secondPlayerDeck'});
    // Match.belongsToMany(models.HistoryMove, {as: 'moves', through: 'MatchHistoryMoves'});
  };
  return Match;
};