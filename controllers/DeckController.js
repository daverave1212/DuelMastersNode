const models = require('../models');

const DeckController = {
    show: (req, res) => {
        models.Deck.findAll({include:[{model: models.Card, through: {attributes: []}}], where: {id: req.params.id}}).then(deck => {
            
            if (!deck) {
                return res.send({});
            }
            return res.send(deck);
        })
    },
    index: (req, res) => {
        if(req.query.owned){ 
            models.Deck.findAll({where:{UserId: req.headers.userId}}).then(ownedDecks => res.send(ownedDecks));
            return;
        }
        models.Deck.findAll().then(allDecks => res.send(allDecks));
    },
    create: (req, res) => {
        models.Deck.create({
            UserId: req.headers.userId,
            name: req.body.name
        }).then(deck => res.send(deck)).catch(err=>console.error(err));
    },
    update: (req, res) => {
        const id = req.params.id;
        models.Deck.update(req.body, { where: { id } }).then(updated =>
            models.Deck.findByPk(id).then(data => res.send(data))
        );
    },
    delete: (req, res) => {
        const id = req.params.id;
        models.Deck.destroy({ where: { id } }).then(data => res.send(true));
    },
    addCardToDeck: (req, res) => {
        models.Deck.findOne({ where: { id: req.body.deckId } }).then(targetDeck => {
            console.log(targetDeck);
            if (!targetDeck){
                throw ('Deck not found');
            }
            if (req.headers.userId !== targetDeck.UserId) {
                throw ( 'Not the owner');
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

    }
}

module.exports = DeckController
