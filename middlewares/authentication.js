const jwt = require('jsonwebtoken');
const config = require('../SuperSecretKey.js');
const jwtDecode = require('jwt-decode');

function doAuthorization(req, res, next){
    if(!req.headers.authorization){
        res.status(401).send({
            error: "No authorization header. You are not authorized to access this resource.",
        })
    } else {
        const tokenToVerify = req.headers.authorization.replace('Bearer ', ''); // https://security.stackexchange.com/a/120244
        jwt.verify(tokenToVerify, config.JWTSECRET, (err, data) => {
            if (err)
               { res.status(401).send({
                  error: "Invalid token?",
                });
            }else{
                req.headers.userId = jwtDecode(tokenToVerify).userId; 
                req.headers.role = jwtDecode(tokenToVerify).role;
                next();
            }
           
        });
    }
}

module.exports = doAuthorization
