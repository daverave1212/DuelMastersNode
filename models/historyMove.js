'use strict';
module.exports = (sequelize, DataTypes) => {
  const HistoryMove = sequelize.define('HistoryMove', {
    target: DataTypes.STRING,
    outcome: DataTypes.STRING
  }, {});
  HistoryMove.associate = function(models) {
    HistoryMove.belongsTo(models.Match);
    HistoryMove.belongsTo(models.User);
  };
  return HistoryMove;
};