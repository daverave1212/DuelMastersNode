'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    firstPlayerHP: DataTypes.INTEGER,
    secondPlayerHTP: DataTypes.INTEGER,
  }, {});
  Match.associate = function (models) {
    Match.belongsTo(models.User, {as: 'firstPlayer'});
    Match.belongsTo(models.User, {as: 'firstPlayerDeck'});
    Match.belongsTo(models.User, {as: 'secondPlayer'});
    Match.belongsTo(models.User, {as: 'secondPlayerDeck'});
    Match.belongsTo(models.HistoryMove, {})

    // Match.belongsTo(models.User, { foreignKey: 'first_player' });
    // Match.belongsTo(models.User, { foreignKey: 'second_player' });
    // Match.hasOne(models.User, {targetKey: ''})
  };
  return Match;
};