const models = require('../models');

const HistoryMoveController = {
    show: (req, res) => {
        models.HistoryMove.findByPk(req.params.id).then(data => {
            if (!data) {
                return res.send({});
            }
            return res.send(data);
        })
    },
    index: (req, res) => {
        models.HistoryMove.findAll().then(data => res.send(data));

    },
    create: (req, res) => {
        models.HistoryMove.create({
            matchId : req.body.matchId,
            actionBy : req.body.actionBy,
            target : req.body.target,
            outcome : req.body.outcome
        }).then(historyMove => {
            return res.send(historyMove);
        });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        models.HistoryMove.update(body, { where: { id } }).then(updated =>
            models.HistoryMove.findByPk(id).then(data => res.send(data))
        );
    },
    delete: (req, res) => {
        const id = req.params.id;
        models.HistoryMove.destroy({ where: { id } }).then(data => res.send(true));
    },
};

module.exports = HistoryMoveController;
