'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Matches',
            'UserId1', {
            type: Sequelize.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        }).then(() => {
            return queryInterface.addColumn(
                'Matches',
                'UserId2', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            });
        }).then(() => {
            return queryInterface.addColumn(
                'Decks',
                'DeckId1', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Decks',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            });
        }).then(() => {
            return queryInterface.addColumn(
                'Decks',
                'DeckId2', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Decks',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            });
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Matches',
            'UserId1'
        ).then(() => {
            return queryInterface.removeColumn(
                'Matches',
                'UserId2'
            );
        }).then(() => {
            return queryInterface.removeColumn(
                'Matches',
                'DeckId1'
            );
        }).then(() => {
            return queryInterface.removeColumn(
                'Matches',
                'DeckId2'
            );
        });
    }
};