
function validateAdmin(req, res, next){
    if(req.headers.role == 0){
        res.status(401).send({
            error: "Unauthorized, you are not an administrator.",
        })
    } else {
       next();
    }
}

module.exports = validateAdmin
