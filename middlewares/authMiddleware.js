const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../controllers/authController')

const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt

    if(token){
        try {
            const userPayload = jwt.verify(token, SECRET_KEY)
        } catch (error) {
            res.status(400).send({status: 'error', msg: "Token Invaild"})
        }
    } else{
        res.status(400).send({status: 'error', msg: "Token Not Found"})
    }
    next()
}
 
module.exports ={
    verifyToken
} 