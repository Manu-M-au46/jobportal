const signUpModel = require('../models/SignupModel')
const jwt = require('jsonwebtoken')

const SECRET_KEY = 'secret'

const signup = async (req,res) => {
const { name, email, password, cpassword, userCategory} = req.body

try {
    if(password != cpassword){
        res.status(400).send({status: 'error', msg: "passwords not matching"})
    }
    const newJobseeker = await signUpModel.create({name, email, password, cpassword, userCategory })
   
   
    res.status(200).send({status: 'sucess', user: newJobseeker})
    // if(newJobseeker.userCategory == 'jobseeker'){
    //     console.log("jobseeker detected")
    //     window.location.href = "jobSeekerProfile.html"
    // }
    // if(newJobseeker.userCategory == 'employer'){
    // console.log("employer detected")
    // window.location.href = "employerProfile.html"
    // }
} catch (error) {
    res.status(500).send({status: 'error', error, msg: "Internal Server Error"})
}
}

const login = async (req,res) => {
 const { email, password } = req.body
try {
   const loggedInSeeker = await signUpModel.findOne({email}, {email: 1, password: 1})
   if(!loggedInSeeker){
    res.status(404).send({status: 'error', msg: "user not found"})
   }

   if(loggedInSeeker.password !== password){
    res.status(400).send({status: 'error', msg: "password incorrect"})
   }
   const userPayload = { email }
   const token = jwt.sign( userPayload, SECRET_KEY, {algorithm: 'HS256', expiresIn: '1d'})
   console.log(token)
   
   res.cookie('jwt', token)
   res.send({status: 'success', msg: "user loggedin successfully"})
} catch (error) {
    res.status(500).send({status: 'error', error, msg: "Internal Server Error"})
}

}

const logout = (req,res) => {
        try {
        res.clearCookie("jwt");
        res.send({status: 'success', msg: "user logged out successfully"});
        } catch (error) {
        res.status(500).send({status: 'error', error, msg: "Internal Server Error"});
        }
        
}

module.exports = {
    signup,
    login,
    logout,
    SECRET_KEY
}