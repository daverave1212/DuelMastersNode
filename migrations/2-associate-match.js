'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Matches',
            'User1Id', {
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        }).then(() => {
            return queryInterface.addColumn(
                'Matches',
                'User2Id', {
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
                'Matches',
                'Deck1Id', {
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
                'Matches',
                'Deck2Id', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Decks',
                    key: 'id'
                },
                allowNull: true,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            });
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Matches',
            'User1Id'
        ).then(() => {
            return queryInterface.removeColumn(
                'Matches',
                'User2Id'
            );
        }).then(() => {
            return queryInterface.removeColumn(
                'Matches',
                'Deck1Id'
            );
        }).then(() => {
            return queryInterface.removeColumn(
                'Matches',
                'Deck2Id'
            );
        });
    }
};