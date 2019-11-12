const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const Sequelize = require('sequelize')

const db = require('./db')

console.log(db)


const Card = require('./CardModel')




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
