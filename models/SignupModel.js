const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const signUpSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    cpassword: {
        type: String,
        required: true
    },
    userCategory: {
        type: String,
        enum : ['jobseeker', 'employer'],
        required: true
    },

})

const signUpModel = mongoose.model('users',signUpSchema)
module.exports = signUpModel
