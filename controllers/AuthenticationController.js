const config = require('../SuperSecretKey.js')
const models = require('../models')
const jwt = require('jsonwebtoken')


const AuthenticationController = {
    login: (req, res) => {
        models.User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password,
            }
        }).then(user => {
            if (user) {
                return jwt.sign({userId: user.id}, config.JWTSECRET, (err, token) => {
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
