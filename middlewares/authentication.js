const jwt = require('jsonwebtoken');
const config = require('../SuperSecretKey.js');

function doAuthorization(req, res, next){
    if(!req.headers.authorization){
        res.status(401).send({
            error: "No authorization header. You are not authorized to access this resource.",
        })
    } else {
        const tokenToVerify = req.headers.authorization.replace('Bearer ', ''); // https://security.stackexchange.com/a/120244
        console.log(`Token to verify: ${tokenToVerify}`)
        jwt.verify(tokenToVerify, config.JWTSECRET, (err, data) => {
          if (err)
            res.status(401).send({
              error: "You are just not allowed, man! Cut it out!",
            });
          else
            next(); // Urmatorul pas din middleware-ul frameworkului
        });
    }
}

module.exports = doAuthorization
