'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const decks = new Array(4).fill(0);
        const cardsInDeck = new Array(30).fill(0); 
        const itemsToInsert = decks.map((deck, deckIndex) => (cardsInDeck.map((card, cardIndex) => ({
            DeckId: deckIndex + 1,
            CardId: (deckIndex + 1) * cardsInDeck.length + cardIndex,
            createdAt: new Date(),
            updatedAt: new Date()
        })))).reduce((array, object, index)=>{array.push(...object);return array;}, []);

        return queryInterface.bulkInsert('DeckCards', itemsToInsert).catch(e => console.error(e));
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('DeckCards', null, {});
    }
};
