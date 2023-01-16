const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const SeekerProfileSchema = new Schema({

   
    mobileno: {
        type: Number,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    education: {
        type: String,
        required: true
    },

    skills: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    }

})

const SeekerProfileModel = mongoose.model('seekerprofiles',SeekerProfileSchema)
module.exports = SeekerProfileModel
