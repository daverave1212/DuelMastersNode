'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'HistoryMoves',
            'MatchId', {
            type: Sequelize.INTEGER,
            references: {
                model: 'Matches',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        }).then(() => {
            return queryInterface.addColumn(
                'HistoryMoves',
                'UserId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            })
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'HistoryMoves',
            'MatchId'
        ).then(() => {
            return queryInterface.removeColumn(
                'HistoryMoves',
                'UserId'
            );
        });
    }
};