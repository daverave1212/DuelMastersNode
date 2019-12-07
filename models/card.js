'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    rarity: DataTypes.STRING,
    type: DataTypes.STRING,
    cost: DataTypes.STRING,
    src: DataTypes.STRING
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};
/*
  How to add more fields:
  - Adaug alea
  - M duc in migration si caut ..-create-card.js
  -- Le adaug si acolo
  - npx sequelize-cli db:migrate:undo
  - npx sequelize-cli db:migrate
  TODO: Intreb Card.associate si foreign keys
  TODO: Cum initalizez modelele in baza de date
  TODO: Intreb ce e cu seederurile alea
  
  Ca sa populez:
  npx sequelize-cli db:seed:all

  Ca sa distrug toate datele:
  npx sequelize-cli db:seed:undo

  Sa intreb daca se poate face mai frums cu modelele gen require models/User

  Ce se intampla cand dau require la un folder?

  Cum fac sa ii dau ca parametru, de exemplu id la User/delete
*/