'use strict';
module.exports = (sequelize, DataTypes) => {
  const HistoryMove = sequelize.define('History_Move', {
    matchId: DataTypes.INTEGER,
    actionBy: DataTypes.INTEGER,
    target: DataTypes.STRING,
    outcome: DataTypes.STRING
  }, {});
  HistoryMove.associate = function(models) {
    // associations can be defined here
  };
  return HistoryMove;
};