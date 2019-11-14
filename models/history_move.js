'use strict';
module.exports = (sequelize, DataTypes) => {
  const History_move = sequelize.define('History_move', {
    match_id: DataTypes.INTEGER,
    action_by: DataTypes.INTEGER,
    target: DataTypes.STRING,
    outcome: DataTypes.STRING
  }, {});
  History_move.associate = function(models) {
    // associations can be defined here
  };
  return History_move;
};