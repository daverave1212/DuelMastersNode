const config = require('../SuperSecretKey.js')
const models = require('../models')
const jwt = require('jsonwebtoken')


const AuthenticationController = {
    login: (req, res) => {
        models.User.findAll({
            where: {
                username: req.body.username,
                password: req.body.password,
            }
        }).then(data => {
            if (data.length > 0) {
                const user = {
                    username : req.body.username,
                    password : req.body.password
                }
                return jwt.sign({user: user}, config.JWTSECRET, (err, token) => {
                    return res.send({ token: token })
                })
            } else {
                res.status(401).send({
                    error: "Invalid username or password. Try again.",
                })
            }
        })
    }
}

module.exports = AuthenticationController
