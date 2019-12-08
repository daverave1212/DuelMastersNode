const models = require('../models');

const Deck_CardController = {
    show: (req, res) => {
        models.Deck_Card.findByPk(req.params.id).then(data => {
            if (!data) {
                return res.send({});
            }
            return res.send(data);
        })
    },
    index: (req, res) => {
        models.Deck_Card.findAll().then(data => res.send(data));

    },
    create: (req, res) => {
        models.Deck_Card.create({
            deck_id : req.body.deck_id,
            card_id : req.body.card_id
        }).then(deck_card => {
            return res.send(deck_card);
        });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        models.Deck_Card.update(body, { where: { id } }).then(updated =>
            models.Deck_Card.findByPk(id).then(data => res.send(data))
        );
    },
    delete: (req, res) => {
        const id = req.params.id;
        models.Deck_Card.destroy({ where: { id } }).then(data => res.send(true));
    },
};

module.exports = Deck_CardController;
