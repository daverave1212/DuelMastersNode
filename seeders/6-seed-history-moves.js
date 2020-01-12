'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('HistoryMoves', [{
      target: 'NONE',
      outcome: 'GAME_START:PLAYER1',
      server: true,
      MatchId: 1,
      UserId: undefined,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      target: 'PLAYER2',
      outcome: '-100',
      server: false,
      MatchId: 1,
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      target: 'NONE',
      outcome: 'TURN:PLAYER2',
      server: true,
      MatchId: 1,
      UserId: undefined,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      target: 'PLAYER2',
      outcome: '50',
      server: false,
      MatchId: 1,
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      target: 'NONE',
      outcome: 'TURN:PLAYER1',
      server: true,
      MatchId: 1,
      UserId: undefined,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      target: 'PLAYER2',
      outcome: '-200',
      server: true,
      MatchId: 1,
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      target: 'NONE',
      outcome: 'GAME_END',
      server: true,
      MatchId: 1,
      UserId: undefined,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('HistoryMoves', null, {});
  }
};
