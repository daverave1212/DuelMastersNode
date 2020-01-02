const models = require('../models');

const DeckCardsController = {
    addCardToDeck: (req, res) => {
        models.Deck.findOne({ where: { id: req.body.deckId } }).then(targetDeck => {
            if (req.headers.userId !== targetDeck.UserId) {
                throw ( 'Not the owner');
            }

            findCard = models.Card.findOne({ where: { id: req.body.cardId } }).then(targetCard => {
                targetDeck.addCard(targetCard).then(() => res.send({ status: 'success' }));
            })
        }).catch(e => {
            console.error(e); res.send({ status: 'error' });
        });

    },
    removeCardFromDeck: () => {

    }
}

module.exports = DeckCardsController;
