const models = require('../models');

const CardController = {
    show: (req, res) => {
        models.Card.findOne({where: {id:req.params.id}}).then(foundCard => {
            if (!foundCard) {
                return res.send({});
            }
            return res.send(foundCard);
        })
    },
    index: (req, res) => {
        models.Card.findAll().then(data => res.send(data));
    },
    create: (req, res) => {
        if(req.headers.role == 0)
        {
            res.status(401).send('Unauthorized');
            return;
        }

        models.Card.create({
            name: req.body.name,
            rarity: req.body.rarity,
            type: req.body.type,
            cost: req.body.cost,
            src: req.body.src,
            race: req.body.race,
            power: req.body.power
        }).then(card => res.send(card)).catch(e=>res.send('Incomplete fields'));
    },
    update: (req, res) => {
        if(req.headers.role == 0)
        {
            res.status(401).send('Unauthorized');
            return;
        }
        models.Card.update(req.body, { where: { id: req.params.id } }).then(updated =>
            models.Card.findOne({where: {id: req.params.id}}).then(data => res.send(data))
        );
    },
    delete: (req, res) => {
        if(req.headers.role == 0)
        {
            res.status(401).send('Unauthorized');
            return;
        }
        models.Card.destroy({ where: { id: req.params.id} }).then(data => res.send('success'));
    },
}

module.exports = CardController
