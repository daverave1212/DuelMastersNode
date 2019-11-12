const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const Sequelize = require('sequelize')
const db = new Sequelize({
    dialect: "sqlite",
    storage: "database/DuelDatabase.db"
})

db.authenticate().then(_ => {
    console.log("Connected")
}).catch(err => {
    console.log(err)
})



const Card = db.define('Card', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true
    },
    name : { type : Sequelize.STRING },
    type : { type : Sequelize.INTEGER },
    createdAt : {
        field : 'created_at',
        type : Sequelize.DATE
    },
    updatedAt : {
        field : 'updated_at',
        type : Sequelize.DATE
    }
})


Card.findAll().then(cards => {
    console.log(cards)
}).catch(err => {
    console.log("Erreur :c")
    console.log(err)
})




const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (request, response) => {
    response.send('Ce pute')
})

app.listen(PORT, _ => console.log(`Server started on ${PORT}`));
