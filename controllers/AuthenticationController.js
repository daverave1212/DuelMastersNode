const config = require('../SuperSecretKey.js');
const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const AuthenticationController = {
    login: (req, res) => {
        models.User.findOne({
            where: {
                username: req.body.username
            }
        }).then(user => {
            bcrypt.compare( req.body.password, user.password).then(hashResponse=>{
                if (hashResponse) {
                    return jwt.sign({userId: user.id, role: user.role}, config.JWTSECRET, (err, token) => {
                        return res.send({token});
                    })
                } else {
                    res.status(401).send({
                        error: "Invalid username or password. Try again.",
                    })
                }
            })
           
        });
    },

    internalLogin: (username, password) => {
        return new Promise((res,err)=>{
            models.User.findOne({
                where: {
                    username,
                    password
                }
            }).then(user => {
                if (user) {
                    return jwt.sign({userId: user.id, role: user.role}, config.JWTSECRET, (err, token) => {
                        return res({token});
                    })
                } else {
                    err({
                        error: "Something went wrong.",
                    })
                }
            });
        });
       
    }
}

module.exports = AuthenticationController
