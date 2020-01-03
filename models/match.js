'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    firstPlayerHP: DataTypes.INTEGER,
    secondPlayerHP: DataTypes.INTEGER,
  }, {});
  Match.associate = function (models) {
    Match.belongsTo(models.User, {as: 'UserId1'});
    Match.belongsTo(models.User, {as: 'UserId2'});
    Match.belongsTo(models.Deck, {as: 'DeckId1'});
    Match.belongsTo(models.Deck, {as: 'DeckId2'});
    Match.hasMany(models.HistoryMove);
  };
  return Match;
};