const models = require('../models');

const HistoryMoveController = {
    show: (req, res) => {
        models.History_Move.findByPk(req.params.id).then(data => {
            if (!data) {
                return res.send({});
            }
            return res.send(data);
        })
    },
    index: (req, res) => {
        models.History_Move.findAll().then(data => res.send(data));

    },
    create: (req, res) => {
        models.History_Move.create({
            match_id : req.body.match_id,
            action_by : req.body.action_by,
            target : req.body.target,
            outcome : req.body.outcome
        }).then(historyMove => {
            return res.send(historyMove);
        });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        models.History_Move.update(body, { where: { id } }).then(updated =>
            models.History_Move.findByPk(id).then(data => res.send(data))
        );
    },
    delete: (req, res) => {
        const id = req.params.id;
        models.History_Move.destroy({ where: { id } }).then(data => res.send(true));
    },
};

module.exports = HistoryMoveController;
