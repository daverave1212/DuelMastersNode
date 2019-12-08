'use strict';
module.exports = (sequelize, DataTypes) => {
  const HistoryMove = sequelize.define('History_Move', {
    target: DataTypes.STRING,
    outcome: DataTypes.STRING
  }, {});
  HistoryMove.associate = function(models) {
    // HistoryMove.belongsTo(models.User, {as: 'caster'});
    // HistoryMove.hasOne(models.HistoryMove, {as: 'match'});
  };
  return HistoryMove;
};