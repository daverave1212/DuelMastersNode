'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    first_player: DataTypes.INTEGER,
    first_player_deck: DataTypes.INTEGER,
    second_player: DataTypes.INTEGER,
    second_player_deck: DataTypes.INTEGER
  }, {});
  Match.associate = function (models) {
    // Match.belongsTo(models.User, { foreignKey: 'first_player' });
    // Match.belongsTo(models.User, { foreignKey: 'second_player' });
    // Match.hasOne(models.User, {targetKey: ''})
  };
  return Match;
};