const db = require('./db')
const Sequelize = require('sequelize')

const Card = db.define('Card', {
    name : { type : Sequelize.STRING },
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true
    },
    civilization : { type : Sequelize.STRING },
    type : { type : Sequelize.STRING },
    cost : { type : Sequelize.INTEGER },
    text : { type : Sequelize.STRING },
    race : { type : Sequelize.STRING },
    power : { type : Sequelize.INTEGER },
    createdAt : {
        field : 'created_at',
        type : Sequelize.DATE
    },
    updatedAt : {
        field : 'updated_at',
        type : Sequelize.DATE
    }
})

module.exports = Card
