const models = require('../models');

const DeckCardsController = {
    addCardToDeck: (req, res) => {
        models.Deck.findOne({ where: { id: req.body.deckId } }).then(targetDeck => {
            console.log(targetDeck);
            if (!targetDeck){
                throw ('Deck not found');
            }
            if (req.headers.userId !== targetDeck.UserId) {
                throw ('Not the owner');
            }

            findCard = models.Card.findOne({ where: { id: req.body.cardId } }).then(targetCard => {
                if(!targetCard){
                    throw ('Card not found');
                }
                targetDeck.addCard(targetCard).then(() => res.send({ status: 'success' }));
            })
        }).catch(e => {
            res.send(e);
        });

    },
    removeCardFromDeck: () => {

    }
}

module.exports = DeckCardsController;
