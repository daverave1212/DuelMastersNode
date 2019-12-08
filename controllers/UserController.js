const models = require('../models');

const UserController = {
    show: (req, res) => {
        models.User.findByPk(req.params.id).then(data => {
            if (!data) {
                return res.send({});
            }
            return res.send(data);
        })
    },
    index: (req, res) => {
        models.User.findAll().then(data => res.send(data));
    },
    create: (req, res) => {
        const body = req.body;
        models.User.create({
            username: body.username,
            password: body.password,
            email: body.email,
            wins: 0,
            loses: 0,
            rank: 0
        }).then(user => {
            return res.send(user);
        });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        models.User.update(body, { where: { id } }).then(updated =>
            models.User.findByPk(id).then(data => res.send(data))
        );
    },
    delete: (req, res) => {
        const id = req.params.id;
        models.User.destroy({ where: { id } }).then(data => res.send(true));
    },
};

module.exports = UserController;
