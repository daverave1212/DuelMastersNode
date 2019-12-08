const models = require('../models');

const DeckCardController = {
    show: (req, res) => {
        models.DeckCard.findByPk(req.params.id).then(data => {
            if (!data) {
                return res.send({});
            }
            return res.send(data);
        })
    },
    index: (req, res) => {
        models.DeckCard.findAll().then(data => res.send(data));

    },
    create: (req, res) => {
        models.DeckCard.create({
            deckId : req.body.deckId,
            cardId : req.body.cardId
        }).then(deckCard => {
            return res.send(deckCard);
        });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        models.DeckCard.update(body, { where: { id } }).then(updated =>
            models.DeckCard.findByPk(id).then(data => res.send(data))
        );
    },
    delete: (req, res) => {
        const id = req.params.id;
        models.DeckCard.destroy({ where: { id } }).then(data => res.send(true));
    },
};

module.exports = DeckCardController;
