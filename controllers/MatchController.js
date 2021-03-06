const models = require('../models');

const MatchController = {
    show: (req, res) => {
        models.Match.findAll({
            attributes: ['id', 'state', 'firstPlayerHP', 'secondPlayerHP'],
            include: [{ model: models.User, as: 'User1', attributes: ['id', 'username', 'wins', 'loses', 'rank'] },
            { model: models.User, as: 'User2', attributes: ['id', 'username', 'wins', 'loses', 'rank'] },
            { model: models.Deck, as: 'Deck1', include: { model: models.Card }, attributes: ['id', 'name'] },
            { model: models.Deck, as: 'Deck2', include: { model: models.Card }, attributes: ['id', 'name'] },
            { model: models.HistoryMove, attributes: ['target', 'outcome'] }],
            where: { id: req.params.id }
        }).then(data => {
            if (!data) {
                return res.send({});
            }
            return res.send(data);
        })
    },
    index: (req, res) => {
        models.Match.findAll({
            attributes: ['id', 'state', 'firstPlayerHP', 'secondPlayerHP', 'createdAt', 'updatedAt'],
            include: [{ model: models.User, as: 'User1', attributes: ['id', 'username', 'wins', 'loses', 'rank'] },
            { model: models.User, as: 'User2', attributes: ['id', 'username', 'wins', 'loses', 'rank'] },
            { model: models.Deck, as: 'Deck1', attributes: ['id', 'name'] },
            { model: models.Deck, as: 'Deck2', attributes: ['id', 'name'] }]
        }).then(data => {
            if (!data) {
                return res.send({});
            }
            return res.send(data);
        })
    },
    create: (req, res) => {
        models.User.findOne({ where: { id: req.headers.userId } }).then(player1 => {
            return models.Match.create({
                firstPlayer: player1,
                firstPlayer_deck: req.body.choosenDeck,
                secondPlayer: models.User.findOne({ where: { id: req.body.targetPlayerId } })
            });
        }).then(match => {
                return res.send(match);
            });
    },
    getPending: (req, res) => {

    },
    setStatus: (req, res) => {

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
