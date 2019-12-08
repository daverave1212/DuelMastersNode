const config = require('../SuperSecretKey.js')
const models = require('../models')
const jwt = require('jsonwebtoken')


const AuthenticationController = {
    login: (req, res) => {
        //console.log(req.body.username)
        //console.log(req.body.password)
        console.log(req.body)
        models.User.findAll({
            where: {
                username: req.body.username,
                password: req.body.password,
            }
        }).then(data => {
            if (data.length > 0) {
                // Returnam aici pentru a opri executia scriptului
                return jwt.sign({}, config.JWTSECRET, (err, token) => {
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
