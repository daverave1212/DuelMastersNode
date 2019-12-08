const models = require('../models');

const MatchController = {
    show: (req, res) => {
        models.Match.findByPk(req.params.id).then(data => {
            if (!data) {
                return res.send({});
            }
            return res.send(data);
        })
    },
    index: (req, res) => {
        models.Match.findAll().then(data => res.send(data));

    },
    create: (req, res) => {
        models.Match.create({
            firstPlayer : req.body.firstPlayer,
            firstPlayer_deck : req.body.firstPlayerDeck,
            secondPlayer : req.body.secondPlayer,
            secondPlayerDeck : req.body.secondPlayerDeck
        }).then(match => {
            return res.send(match);
        });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        models.Match.update(body, { where: { id } }).then(updated =>
            models.Match.findByPk(id).then(data => res.send(data))
        );
    },
    delete: (req, res) => {
        const id = req.params.id;
        models.Match.destroy({ where: { id } }).then(data => res.send(true));
    },
};

module.exports = MatchController;
