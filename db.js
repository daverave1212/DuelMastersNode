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

module.exports = db
