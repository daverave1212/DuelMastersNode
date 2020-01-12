const jwt = require('jsonwebtoken');
const config = require('../SuperSecretKey.js');
const jwtDecode = require('jwt-decode');
// const models = require('../models');

// function verifyUsernameAndPassword(data, callback){
//     models.User.findAll({
//         where: {
//             username: data.user.username,
//             password: data.user.password,
//         }
//     }).then(data => {
//         if(data != null && data.length > 0){
//             callback(false);
//         } else {
//             callback(true);
//         }
//     })
// }

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
            // else{
            //     verifyUsernameAndPassword(data, (error) => {
            //       if(err){
            //           res.status(403).send({
            //               error: "Invalid username and/or password."
            //           })
            //       } else {
            //           next()
            //       }
            //     })
            // }
        });
    }
}

module.exports = doAuthorization
