const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const employerProfileSchema = new Schema({

   
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    contact: {
        type: String,
        required: true
    }

})

const EmployerProfileModel = mongoose.model('employers',employerProfileSchema)
module.exports = EmployerProfileModel
