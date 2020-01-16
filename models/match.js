'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    state: DataTypes.STRING,
    firstPlayerHP: DataTypes.INTEGER,
    secondPlayerHP: DataTypes.INTEGER,
  }, {});
  Match.associate = function (models) {
    Match.belongsTo(models.User, {as: 'User1', foreignKey: 'User1Id'});
    Match.belongsTo(models.User, {as: 'User2', foreignKey: 'User2Id'});
    Match.belongsTo(models.Deck, {as: 'Deck1', foreignKey: 'Deck1Id'});
    Match.belongsTo(models.Deck, {as: 'Deck2', foreignKey: 'Deck2Id'});
    Match.hasMany(models.HistoryMove);
  };
  return Match;
};