const models = require('../models');

const CardController = {
    show: (req, res) => {
        models.Card.findByPk(req.params.id).then(data => {
            if (!data) {
                return res.send({});
            }
            return res.send(data);
        })
    },
    index: (req, res) => {
        models.Card.findAll().then(data => res.send(data));
    },
    create: (req, res) => {
        models.Card.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }).then(card => res.send(card));
    },
    update: (req, res) => {
        const id = req.params.id;
        models.Card.update(req.body, { where: { id } }).then(updated =>
            models.Card.findByPk(id).then(data => res.send(data))
        );
    },
    delete: (req, res) => {
        const id = req.params.id;
        models.Card.destroy({ where: { id } }).then(data => res.send(true));
    },
}

module.exports = CardController
