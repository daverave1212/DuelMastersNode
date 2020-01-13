const models = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const AuthenticationController = require('../controllers/AuthenticationController');

const UserController = {
    show: (req, res) => {
        models.User.findOne({ include: [{ model: models.Deck }, { model: models.Match }], where: { id: req.params.id }, attributes: ['id', 'username', 'wins', 'loses', 'rank', ... (req.headers.role > 0 ? ['email', 'createdAt', 'updatedAt'] : [])] }).then(data => {
            if (!data) {
                return res.send({});
            }
            return res.send(data);
        })
    },
    index: (req, res) => {
        models.User.findAll({attributes: ['id', 'username', 'wins', 'loses', 'rank', ... (req.headers.role > 0 ? ['email', 'createdAt', 'updatedAt'] : [])] }).then(data => res.send(data));
    },
    create: (req, res) => {
        const body = req.body;
        models.User.create({
            username: body.username,
            password: bcrypt.hashSync(body.password, saltRounds),
            email: body.email,
            wins: 0,
            loses: 0,
            rank: 0,
            role: 0
        }).then(user => {
            return AuthenticationController.internalLogin(user.username, user.password);
        }).then(token => res.send(token));
    },
    update: (req, res) => {
        if (req.params.id !== req.headers.userId && req.headers.role == 0) {
            res.status(401).send('Unauthorized');
            return;
        }

        const body = req.body;

        if (body.id !== undefined && req.headers.role == 0) {
            body.id = undefined;
        }

        console.log(body);
        models.User.update(body, { where: { id: req.params.id } }).then(updated =>
            res.send('success')
            , err => res.send('error'));
    },
    delete: (req, res) => {
        if (req.headers.role == 0) {
            res.status(401).send('Unauthorized');
            return;
        }

        const id = req.params.id;
        models.User.destroy({ where: { id } }).then(data => res.send('success'), failed => res.send('User not found'));
    },
};

module.exports = UserController;
