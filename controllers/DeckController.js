const models = require('../models');

const DeckController = {
    show: (req, res) => {
        models.Deck.findByPk(req.params.id).then(data => {
            if (!data) {
                return res.send({});
            }
            return res.send(data);
        })
    },
    index: (req, res) => {
        models.Deck.findAll().then(data => res.send(data));
    },
    create: (req, res) => {
        models.Deck.create({
            ownerId: req.body.ownerId,
        }).then(deck => res.send(deck));
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
}

module.exports = DeckController
